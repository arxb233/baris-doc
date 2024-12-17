---
title: 全流程在制品数据结构
date: 2023-10-27 17:08:21
tags:
top_img: https://p2.itc.cn/images01/20210312/32c6aa346f1e4d1f909ba83f28a32cdd.png
cover: https://p2.itc.cn/images01/20210312/32c6aa346f1e4d1f909ba83f28a32cdd.png
---
<center><h1> 全流程在制品数据结构</h1></center>

## 一.测包在制品报表

##### 1.批次系统数据逻辑
```json
select * from xgdz_chipsl where ckname='NC' and outqty>0 and prcno not in (select prcno from xgdz_chipprc) //测包在制品
//xgdz_chipsl  为散料仓批次信息  outqty>0 为已发料
//xgdz_chipprc 为测包报表记录
//先用已发料，未完成报表为在制品查询。 
//后续待完善入库流程，可能要变更以入库来扣除在制品
```
##### 2.字段取值
| 打标日期  | 流程号 |   规格   |   阻值    |    数值    |              滞留天数              |  备注   | 测包号码 |
| :-------: | :----: | :------: | :-------: | :--------: | :--------------------------------: | :-----: | :------: |
| L.prtDate | prcno  | prodtype | prodvalue | L.quantity | DATEDIFF(DAY,L.prtDate,GETDATE()） | outmemo |  L.CBNo  |

##### 3.界面合计

|   合计批数    |                           合计盘数                           |
| :-----------: | :----------------------------------------------------------: |
| dt.Rows.Count | Math.Round(dt.AsEnumerable().Sum(row => row.Field<decimal>("quantity"))) |


#####  4.数据sql

```sql
SELECT L.prtDate,c.prcno,c.prodtype,c.prodvalue,L.quantity as OutQty,L.quantity,DATEDIFF(DAY, TRY_CONVERT(DATE, CAST(L.prtDate AS VARCHAR(8)), 112), GETDATE()) AS waitday,c.outmemo,L.CBNo
FROM xgdz_chipsl AS c
LEFT JOIN xgdz_chipprc AS p ON c.prcno = p.prcno
JOIN XGDZ_ChipLabel AS L ON c.prcno = L.prcno
WHERE c.ckname in ('NC')
AND c.outqty > 0
AND c.IsOk <> 1
AND p.prcno IS NULL
AND L.prtDate not in('0')
AND L.isout in('0')
AND L.quantity >0
AND TRY_CONVERT(DATE, CAST(L.prtDate AS VARCHAR(8)), 112) > '2023-06-01'
ORDER BY L.prtDate ASC;
```

##### （1）过滤条件
```json
c.ckname in ('NC')：c.ckname 必须等于 'NC'。//程序里这里填写动态变量'organid'，南充为'NC',东莞为'dg'，南充+东莞为"NC','dg"
c.outqty > 0：c.outqty 必须大于 0。//过滤已发料
c.IsOk <> 1：c.IsOk 不能等于 1。//过滤不为退料
p.prcno IS NULL：p.prcno 必须为 NULL。//过滤prcno不在xgdz_chipprc里的记录
L.prtDate not in('0')：L.prtDate 不能等于 '0'。//过滤打印日期为0
L.isout in('0')：L.isout 必须等于 '0'。//过滤已经有出货日期的
L.quantity > 0：L.quantity 必须大于 0。//过滤数据等于0的数
TRY_CONVERT(DATE, CAST(L.prtDate AS VARCHAR(8)), 112) > '2023-06-01'：L.prtDate 经过格式转换后的日期在 '2023-06-01' 之后。//过滤6月1号之前的数据
```
##### （2）排序
```json
ORDER BY 语句：对结果进行排序。在这里，按 L.prtDate 列的升序顺序对结果进行排序。
```



## 二.生产在制品报表

1.生产系统在制品逻辑

```sql
Select * From 晶片流程總匯 Where 余數>0 And 流程號 NOT IN(Select 批號 From 散料出倉記錄) Order By 流程號  
```

2.表体

| 流程號 | 規格 | 誤差 | 阻值 | 數量 | 工序 | 滞留天数 | 余数 | 部门 |
| ------ | ---- | ---- | ---- | ---- | ---- | :------: | ---- | ---- |
| 流程號 | 規格 | 誤差 | 阻值 | 數量 | 工序 | DATEDIFF(DAY,投入時間,GETDATE()） |  余数   |  ZRR  |

3.工序对应部门

|                |     厚膜      |   BR   |   BU   |  LBR   |
| :------------: | :-----------: | :----: | :----: | :----: |
|     流程号     | BK，N，纯数字 |   BR   |   BU   | BL，L  |
| 工序部门对应表 |    LCBA01     | LCBR01 | LCBU01 | LCBL01 |

4.数据sql

```sql
SELECT j.流程號,j.規格,j.誤差,j.阻值,j.數量,j.工序,j.滞留天数,g.ZRR as 部门
FROM (
    SELECT 流程號,規格,誤差,阻值,數量,DATEDIFF(DAY,投入時間, GETDATE())as 滞留天数,余數,工序,投入時間
    CASE 
		 WHEN 工序 IN ('返工01G1燒結(600') THEN 'G1燒結(600)'
    	 WHEN 工序 IN ('返工01R值燒結(85') THEN 'R值燒結(850)'
		 WHEN 工序 IN ('返工-退鍍01') THEN '電鍍'
    	 WHEN 工序 IN ('返工01南充') THEN 'R值印刷'
         WHEN LEFT(工序, 4) IN ('返工01') THEN SUBSTRING(工序, 5, LEN(工序))
         ELSE 工序
    END as 工序1
    FROM 晶片流程總匯
) as j
LEFT JOIN 散料出倉記錄 as c ON j.流程號 = c.批號 
LEFT JOIN LCBA01 as g ON j.工序1 = g.DEP 
WHERE j.余數 > 0 
AND c.批號 IS NULL 
AND LEFT(j.流程號, 2) IN ('BK')
ORDER BY j.投入時間 ASC;
```

5.生产数据卡顿优化方式

```C#
//将生产系统的在制品表拉取到云数据库提高查询速度
public static void GetProdAllClass()
        {
            // 步骤 1: 在源数据库中执行查询并将结果存储在 DataTable 中
            using (OleDbConnection sourceConnection = new OleDbConnection())//填写sql链接方式
            {
                sourceConnection.Open();

                 string query = "SELECT 流程號, 規格, 誤差, 阻值, 數量, 余數, 投入時間, 工序 FROM 晶片流程總匯 WHERE 余數 > 0 " +
                "AND 流程號 NOT IN (SELECT 批號 FROM 散料出倉記錄) ORDER BY 流程號";
                using (OleDbDataAdapter adapter = new OleDbDataAdapter(query, sourceConnection))
                {
                    DataTable dataTable = new DataTable();
                    adapter.Fill(dataTable);

                    // 步骤 2: 清空云数据库目标表
                    using (SqlConnection targetConnection = new SqlConnection())//填写sql链接方式
                    {
                        targetConnection.Open();

                        using (SqlCommand command = new SqlCommand("TRUNCATE TABLE SC_FullWipReport", targetConnection))
                        {
                            command.ExecuteNonQuery();
                        }

                        // 步骤 3: 将 DataTable 中的数据复制到目标数据库的表
                        using (SqlBulkCopy bulkCopy = new SqlBulkCopy(targetConnection))
                        {
                            bulkCopy.DestinationTableName = "SC_FullWipReport"; // 目标数据库中的表名称
                            bulkCopy.WriteToServer(dataTable);
                        }
                    }
                }
            }
        }
```
6.云数据库在制品sql
```C#
	public static DataTable GetProdClass(string id, string table,string type)
        {
            string str = "SELECT j.流程號,j.規格,j.誤差,j.阻值,j.數量,j.滞留天数,j.工序,g.ZRR as 部门,p.ZRR as PMC自定义工序 \r\n" +
                "FROM (\r\n" +
                " SELECT 流程號,規格,誤差,阻值,數量,DATEDIFF(DAY,投入時間, GETDATE())as 滞留天数,余數,工序,投入時間,\r\n" + //字段过滤，字段计算
                "    CASE \r\n " +
                "WHEN 工序 IN ('返工01G1燒結(600') THEN 'G1燒結(600)'\r\n" +//生产系统特殊取值换算
                " WHEN 工序 IN ('返工01R值燒結(85') THEN 'R值燒結(850)'\r\n" +//生产系统特殊取值换算
                " WHEN 工序 IN ('返工-退鍍01') THEN '電鍍'\r\n    \t" +//生产系统特殊取值换算
                " WHEN 工序 IN ('返工01南充') THEN 'R值印刷'\r\n" + //生产系统特殊取值换算
                " WHEN LEFT(工序, 4) IN ('返工01') THEN SUBSTRING(工序, 5, LEN(工序))\r\n" +//截取返工01之后的字段，当正常工序关联，取工序部门
                "  ELSE 工序\r\n" +
                "    END as 工序1\r\n " +
                "   FROM SC_FullWipReport\r\n" + //云数据库表名
                ") as j\r\n" +
                "LEFT JOIN "+ table + " as g ON j.工序1 = g.DEP \r\n" + //关联生产系统工序 table为不同类型料的不同表，该表已复制到云数据库
                "LEFT JOIN (select * from SC_LCPMC01 Where type='"+type+"') as p ON j.工序1 = p.GX \r\n" + //关联pmc自定义工序
                "Where " +id+" \r\n" + //自定义筛选条件，目前用于筛选不同类型的料 "LEFT(j.流程號, 2) LIKE 'BR'"
                "ORDER BY j.投入時間 ASC;";

            DataTable dt = DataBaseSet.GetZCTMIS(str);
            return dt;
            
  }
```
## 三.全制程在制品子表

1.规格简码生成规则

| 0201 | 0603 | 0402 | 0805 | 1206 | 1210 | 1812 | 2010 | 2512 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
|  01  |  03  |  02  |  05  |  06  |  10  |  12  |  20  |  25  |

2.散料名称生成规则

|                   厚膜                   |             BR              |          BU          |             LBR             |
| :--------------------------------------: | :-------------------------: | :------------------: | :-------------------------: |
| IF（BK，A，C）+规格简码+误差码+"  "+阻值 | B+规格简码+误差码+"  "+阻值 | A+规格简码+"  "+阻值 | C+规格简码+误差码+"  "+阻值 |



3.成品名称生成规则

|                     厚膜                     |             BR              |       BU       |             LBR             |
| :------------------------------------------: | :-------------------------: | :------------: | :-------------------------: |
| IF（N，規格，RCA+规格简码）+误差码+"  "+阻值 | LED+规格简码+误差+"  "+阻值 | 規格+"  "+阻值 | RCA+规格简码+误差+空格+阻值 |

```C#
//生产系统成品散料名称生成
foreach (DataRow row in dt.Rows)
{
   FWS = SwitchHelper.PrecisionConvertReverse(row["誤差"].ToString().Replace(" ", ""));
   ProdTytpe = row["規格"].ToString().Replace(" ", "");
   ProdValue = row["阻值"].ToString().Replace(" ", "");

   switch (table) {
         case "SC_LCBA01":
             switch (row["流程號"].ToString().Substring(0, 2))
             {
               case "BK":
                 BulkName = "RCA";
                 break;
               default:
                 BulkName = "RCT";
                 break;
              }
            break;
          case "SC_LCBR01":
              BulkName  = "LED";
               break;
          case "SC_LCBU01":
              BulkName = "0R";
              break;
           case "SC_LCBL01":
              BulkName = "RCA";
              break;
 }
```

```C#
//批次系统测包成品散料生成	
foreach (DataRow row in dt.Rows)
{
   CBNO = row["CBNo"].ToString().Replace(" ","");
   CBNORight = (CBNO.Length > 0) ? CBNO.Substring(CBNO.Length - 1) : string.Empty;
   FWS = row["prodtype"].ToString().Substring(4).Replace(" ", "");
   ProdTytpe = row["prodtype"].ToString().Substring(0,4).Replace(" ", "");
   ProdValue = row["prodvalue"].ToString().Replace(" ", "");

   if (ProdValue == "0R")
   {
      BulkName = "0R";
   }
   else {
      switch (CBNORight)
      {
         case "L":
             BulkName = "LED";
         break;
         case "P":case "Q":
             BulkName = "RCA";
         break;
         case "A":case "B":case "E":
             BulkName = "RCT";
              break;
         case "C":case "F": case "K":case "D":
              containsNumber = Regex.IsMatch(row["prcno"].ToString().Replace(" ", "").Substring(0, 2), @"\d");
              prcnoid = (containsNumber) ? 1 : 2; //布尔值条件需要反向赋值
             prcno = row["prcno"].ToString().Replace(" ", "").Substring(0, prcnoid);
             switch (prcno)
             {
               case "BK":case "BL":case "L":
               	  BulkName = "RCA";
                  break;
               case "BR":case "C":case "R":
                  BulkName = "LED";
                  break;
               case "N":
                   BulkName = "RCT";
                   break;
               case "G":
                  if (row["prcno"].ToString().Replace(" ", "").Substring(row["prcno"].ToString().Replace(" ", "").Length - 1) == "L")
                  {
                      BulkName = "LED";
                  }
                   else
                  {
                       BulkName = "RCT";
                  }
                  break;
              default:
                    BulkName = "RCT";
                    break;
              }
              reak; 
    default:
         BulkName = "RCT";
         break;
    }
}
     if (CBNORight == "D")
    {
        row["成品名称"] = row["成品名称"] + " " + "大料盘";
    }
```
4.PMC自定义工序部门

|         |                             厚膜                             |                  BR                  |                      BU                       |                     LBR                     |
| ------- | :----------------------------------------------------------: | :----------------------------------: | :-------------------------------------------: | :-----------------------------------------: |
| P值前   |                              无                              | BR掩膜，真鍍膜層，BC2掩膜，熱處理125 | BR掩膜，真鍍膜層，BC2掩膜，熱處理125，預熱125 |    BR掩膜，真鍍膜層，BC2掩膜，熱處理125     |
| P值在制 |                              无                              |         老化，水洗，水洗PQC          |              老化，水洗，水洗PQC              |             老化，水洗，水洗PQC             |
| 制一    | 背導(C2)，正導(C1)，導體燒結(850)，R值印刷，R值燒結(850)，G1印刷，G1燒結(600)， |    正導(C1)，SC1印刷，燒結(850)，    |    正導(C1)，SC1印刷，燒結(850)，燒結(600)    | 正導(C1)，SC1印刷，燒結(850)，導體燒結(850) |
| 制二    |             一次分割，側導真鍍，二次分割，篩選，             | 一次分割，側導真鍍，二次分割，篩選， |     一次分割，側導真鍍，二次分割，篩選，      |    一次分割，側導真鍍，二次分割，篩選，     |
| 镭切    |                             鐳射                             |            鐳射，鐳射PQC             |                 鐳射，鐳射PQC                 |                鐳射，鐳射PQC                |
| MK      |                  G2印刷，阻值標示，片狀外觀                  |      G2印刷，阻值標示，片狀外觀      |          G2印刷，阻值標示，片狀外觀           |         G2印刷，阻值標示，片狀外觀          |
| 制三    |                  電鍍，磁選，粒狀外觀，分珠                  |      電鍍，磁選，粒狀外觀，分珠      |          電鍍，磁選，粒狀外觀，分珠           |         電鍍，磁選，粒狀外觀，分珠          |

```C#
	use zctmis；
	select * from SC_LCPMC01 //PMC自定义工序
    select * from SC_PValue //PMC自定义P值段散料名称
```

5.测包物料名称生成规则

| 称呼 | 成品料号                                                     | 散料料号                                                     | 流程号开头                                                   | 测包号末尾    | 备注                                      |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------- | ----------------------------------------- |
| RCT  | 规格+精度+空格+阻值                                          | A+规格简码+精度+阻值                                         | 数字开头，N开头                                              | A,B,E         |                                           |
| RCA  | RCA+规格简码+精度+空格+阻值                                  | C+规格简码+精度+阻值 小部分A+规格简码+精度+阻值              | BK开头，BL开头，L开头 小部分数字开头，N开头                  | P,Q 小部分B,L | 测包号末尾带D在成品料号后面+空格+“大料盘” |
| LED  | LED+规格简码+精度+空格+阻值                                  | B+规格简码+精度+阻值 小部分A+规格简码+精度+阻值 小部分C+规格简码+精度+阻值 | BR开头，C开头，R开头 小部分BK开头，BL开头，L开头 小部分数字开头，N开头 | L             | 测包号末尾带C，F，K成品料号按流程号判断   |
| RS   | RS+空格+规格简码+空格+阻值+空格+精度+TR+空格+功率（？W）     | A+规格简码+精度+阻值                                         | 数字开头，N开头                                              | A             | RS阻值范围0-1R（不含）                    |
| FPF  | FPF+空格+规格简码+空格+阻值+空格+精度+TR+空格+温度系数（？PPM）+功率（？W） | A+规格简码+精度+阻值                                         | 数字开头，N开头                                              | A             | FPF升功率物料                             |
| 0R   | 规格+空格+0R                                                 | A+规格简码+0R                                                | BU开头，部分N开头，数字开头                                  | A,L           |                                           |



```C#
//散料名称合成方式
public static string BulkProdNameConver(string ProdType, string FWS, string ProdValue, string name)
{
   string Bulk = "";
   ProdType = SwitchHelper.FwsConvert(ProdType);
   switch (name)
   {
     case "RCT":
         Bulk = "A" + ProdType + FWS + ProdValue;
     	break;
     case "RCA":
     	 Bulk = "C" + ProdType + FWS + ProdValue;
     	break;
     case "LED":
          Bulk = "B" + ProdType + FWS + ProdValue;
          break;
     case "RS":
          Bulk = "A" + ProdType + FWS + ProdValue;
          break;
     case "FPF":
          Bulk = "A" + ProdType + FWS + ProdValue;
          break;
     case "0R":
          Bulk = "A" + ProdType + ProdValue;
          break;
    default:
          Bulk = string.Empty;
           break;
    }
    return Bulk;
}
```
```C#
//成品名称合成方式
public static string FinishProdNameConver(string ProdType,string FWS,string ProdValue,string name) 
{
	string Finish = "";
    switch (name) {
        case "RCT":
           Finish = ProdType + FWS + " " + ProdValue;
           break;
        case "RCA":
            Finish = "RCA" + SwitchHelper.FwsConvert(ProdType) + FWS + " " + ProdValue;
           break;
         case "LED":
            Finish = "LED" + SwitchHelper.FwsConvert(ProdType) + FWS + " " + ProdValue;
            break;
          case "RS":
             Finish = string.Empty;
             break;
           case "FPF":
              Finish = string.Empty;
              break;
           case "0R":
             Finish = ProdType + " " + ProdValue;
              break;
           default:
               Finish = string.Empty;
               break;
    }
return Finish;
}
```

6.子表表体结构

| 成品名称 | 散料名称 | 規格 | 誤差 | 阻值 | 數量 | 滞留天数 | 流程號 | 工序 | 部门 | 自定义 |
| ------ | ---- | ---- | ---- | ---- | :--: | :------: | ---- | :--: | ---- | :--: |
| 成品名称 | 散料名称 | 規格 | 誤差 | 阻值 | 數量 | DATEDIFF(DAY,投入時間,GETDATE()） | 流程號 | 工序 | ZRR |  自定义工序  |




## 四.全制程在制品总表

| 物料信息 |          |      |      | 数量 |       |         | Pmc  | 自定义 | 工序 |      |      |      |
| -------- | -------- | ---- | ---- | ---- | ----- | ------- | ---- | ------ | ---- | ---- | ---- | ---- |
| 成品名称 | 散料名称 | 工序 | 部门 | 数量 | P值前 | P值在制 | 制一 | 镭切   | MK   | 制二 | 制三 | 测包 |
| 成品名称 | 散料名称 | 工序 | 部门 | 数量 | 数量  | 数量    | 数量 | 数量   | 数量 | 数量 | 数量 | 数量 |
|          |          |      |      | 总计 | 合计  | 合计    | 合计 | 合计   | 合计 | 合计 | 合计 | 合计 |





## 五.总表合成方式

1.将四张子表数据合并

```C#
dt.Merge(FullwipProd.ProdClassChang("LEFT(j.流程號, 2) NOT LIKE 'BR' AND LEFT(j.流程號, 2) NOT LIKE 'BU' AND LEFT(j.流程號, 2) NOT LIKE 'BL' AND LEFT(j.流程號, 2) NOT LIKE 'L%'", "SC_LCBA01", "厚膜"));
dt.Merge(FullwipProd.ProdClassChang("LEFT(j.流程號, 2) LIKE 'BR'", "SC_LCBR01", "BR"));
dt.Merge(FullwipProd.ProdClassChang("LEFT(j.流程號, 2) LIKE 'BU'", "SC_LCBU01", "BU"));
dt.Merge(FullwipProd.ProdClassChang("LEFT(j.流程號, 2) LIKE 'BL' OR LEFT(j.流程號, 2) LIKE 'L%'", "SC_LCBL01", "LBR"));

```

2.测包数据汇入总表
```C#
dt.Merge(FullwipProd.CbChangForProdClass("dg")); //测包东莞
dt.Merge(FullwipProd.CbChangForProdClass("nc")); //测包南充
```
```C#
public static DataTable CbChangForProdClass(string Orgin)
{
    DataTable dt = FullwipProd.CBChang(Orgin);
    DataTable CP = new DataTable();

    CP.Columns.Add("流程號", typeof(string))?.SetOrdinal(0);
    CP.Columns.Add("規格", typeof(string))?.SetOrdinal(1);
   	CP.Columns.Add("誤差", typeof(string))?.SetOrdinal(2);
    CP.Columns.Add("阻值", typeof(string))?.SetOrdinal(3);
    CP.Columns.Add("數量", typeof(decimal))?.SetOrdinal(4);
    CP.Columns.Add("工序", typeof(string))?.SetOrdinal(5);
    CP.Columns.Add("部门", typeof(string))?.SetOrdinal(6);
   	CP.Columns.Add("PMC自定义工序", typeof(string))?.SetOrdinal(7);
    CP.Columns.Add("散料名称", typeof(string))?.SetOrdinal(8);
    CP.Columns.Add("成品名称", typeof(string))?.SetOrdinal(9);

    foreach (DataRow row in dt.Rows)
   {
     DataRow CPRow = CP.NewRow();
     CPRow["流程號"] = row["prcno"].ToString();
     CPRow["規格"] = row["prodtype"].ToString().Substring(0, 4).Replace(" ", "");
     CPRow["誤差"] = row["prodtype"].ToString().Substring(4).Replace(" ", "");
     CPRow["阻值"] = row["prodvalue"].ToString();
     CPRow["數量"] = Convert.ToDecimal(row["quantity"]);
     CPRow["PMC自定义工序"] = "测包";
     CPRow["散料名称"] = row["散料名称"].ToString();
    CPRow["成品名称"] = row["成品名称"].ToString();

    if (Orgin == "dg")
    {
       CPRow["工序"] = "测包-东莞";
       CPRow["部门"] = "东莞";
    }
    else {
       CPRow["工序"] = "测包";
        CPRow["部门"] = "制四";
    }
      CP.Rows.Add(CPRow);
    }
      return CP;
  }
```

3.处理合并后的数组，进行分类合计

```C#
var groupedData = dt.AsEnumerable()
    .Where(row => (row.Field<string>("部门") ?? string.Empty) != "倉庫") // 过滤掉 PMC部门 = "倉庫" 的行
    .GroupBy(row => new
    {
      成品名称 = row.Field<string>("成品名称") ?? string.Empty,
      散料名称 = row.Field<string>("散料名称") ?? string.Empty,
      規格 = row.Field<string>("規格") ?? string.Empty,
      阻值 = row.Field<string>("阻值") ?? string.Empty,
      工序 = row.Field<string>("工序") ?? string.Empty
    })
    .Select(group => new
    {
      成品名称 = group.Key.成品名称,
      散料名称 = group.Key.散料名称,
      規格 = group.Key.規格,
      阻值 = group.Key.阻值,
      工序 = group.Key.工序,
      數量 = group.Sum(row => (row.Field<decimal?>("數量") ?? 0))
    })
   .OrderBy(item => item.成品名称) // 按 "成品名称" 列进行升序排序
   .ToList();
```
4.将所有工序横向展开，作为二级表头。PMC自定义工序部门为合计一级表头

```C#
foreach (var group in groupedData)
{
   DataRow pmcRow = pmc.NewRow();
   pmcRow["成品名称"] = group.成品名称;
   pmcRow["散料名称"] = group.散料名称;
   pmcRow["規格"] = group.規格;
   pmcRow["阻值"] = group.阻值;
   pmcRow["工序"] = group.工序;
   pmcRow["部门"] = group.部门;


   string pmcProcess = group.PMC自定义工序;
   if (columnMappings.ContainsKey(pmcProcess))
  {
      qty = group.數量;
      pmcRow[columnMappings[pmcProcess]] = qty; //数量分散赋值到对应表头
  }

 if (dataDictionary.ContainsKey(group.成品名称))
 {
     pmcRow["散料名称"] = dataDictionary[group.成品名称]; //PMC自定义存在P值段散料名称
 }
              
  pmcRow["數量"] = qty;
  pmc.Rows.Add(pmcRow);
}

```
## 六.界面布局
![](https://blog.fanpin.icu/2023/10/27/FullWipReport/20231108140858.png)

