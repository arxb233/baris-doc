---
title: 工作常用sql-加密文章
date: 2023-10-17 08:17:35
tags: 
top_img: https://p2.itc.cn/images01/20210312/32c6aa346f1e4d1f909ba83f28a32cdd.png
cover: https://p2.itc.cn/images01/20210312/32c6aa346f1e4d1f909ba83f28a32cdd.png
password: 123qwe
message: 本文章为加密文章，请联系作者获取密码
---

## 直接调拨单
```sql
SELECT * FROM XGDZ_CheckSub where BillNO= #明细表
select * from XGDZ_CheckMain where BillNO= #主表
select BillNO,SerNo,FromSerNo,ProdID,ProdName,Quantity,Unit,OriginalID,OrigiName,BoxNo,ToBoxNo,CustBillNo,PreInDate,Detail,BillDate,ProdPrt As CustPrt,ClassName,OtherParameters from XGDZ_CheckSub where Billno= #标签系统明细表
SELECT * FROM XGDZ_CheckMain a JOIN XGDZ_CheckSub b ON (a.BillNo = b.BillNO) WHERE a.BillNo= #标签系统主表明细表关联
```
## 启益客户物料对应表
```sql
select OrigiName,Memo from XGDZ_CustOriginal where Custid='Y0470' and OriginalID='" + dt.Rows[i]["OriginalID"].ToString().Trim() + "' and Memo !=''
```
## 美的流水表
```sql
SELECT TOP 1 cMonth,CMothSerialNo,CSerialNo FROM XGDZ_MdNoN WHERE BillNO='"+ textBox1.Text + "' ORDER BY No DESC
```
## 华美流水表
```sql
select FirstNo,SecondNo,ThirdNo from XGDZ_Y0672 where FirstNo=(select Max(FirstNo) from XGDZ_Y0672)and SecondNo=(select Max(SecondNo) from XGDZ_Y0672 where FirstNo=(select Max(FirstNo) from XGDZ_Y0672)) and ThirdNo=(select Max(ThirdNo) from XGDZ_Y0672 where SecondNo=(select Max(SecondNo) from XGDZ_Y0672 where FirstNo=(select Max(FirstNo) from XGDZ_Y0672)) and FirstNo=(select Max(FirstNo) from XGDZ_Y0672))
select * from XGDZ_Y0672 
update XGDZ_Y0672 set secondNo ='7' where SerID='21429'
```
## 小客户通用流水表
```sql
SELECT * FROM XGDZ_Y1710_No ORDER BY Sequence DESC
```

## 标签打印记录表
```sql
SELECT SUM(SmallQty) AS 盘标数量, SUM(NQty) AS 内盒数量, SUM(WQty) AS 外箱数量, BillNO AS 单据号, MAX(printTime) AS 最后打印时间, SUM(pqty) AS 打印次数 FROM XGDZ_PrintNum WHERE billno='" + textBox1.Text.Trim() + "' GROUP BY BillN
```
##贴标机出货记录
```sql
select * from XH12.dbo.Xgdz_Scansub where boxno='N_6OY0NZ2NJ'
```
## BL测包报表
```sql
select min(prcdate)as prcdate,prcno,sum(quantity)as Quantity from HKR13.dbo.XGDZ_ChipPrc where prcdate between 20230501 and 20230731 and Left(prcno,2)='BL'group by prcno
```

## 测包在制品
```sql
select * from xgdz_chipsl where ckname='NC' and outqty>0 and prcno not in (select prcno from xgdz_chipprc) #测包在制品
#xgdz_chipsl  为散料仓批次信息  outqty>0 为已发料
#xgdz_chipprc 为测包报表记录
#先用已发料，未完成报表为在制品查询。 
#后续待完善入库流程，可能要变更以入库来扣除在制品
```
## 散料管理
```sql
select * from 散料出倉記錄 as BulkMaOutRec UNION All select * from 散料出倉記錄Y as BulkMaOutRecY
```
## 检验报告
```sql
select prcno,max(serID) as serid,BillDate,CheckNo,Originalid,BoxNo,prodType,prodValue,sum(quantity) as qty,Maker,max(newDate)as newDate,prcno as cbno,custBillNo,FullName FROM HKR13.dbo.xgdz_chipqa WHERE CheckNo = '" + billno + "' GROUP BY BillDate,CheckNo,BoxNo,prodType,prodValue,Maker,prcno,custBillNo,Originalid,FullName ORDER BY serid ASC";
#HKR13.dbo.xgdz_chipqa2023
```
## 销售出库单api接口

```json
"{\n" +
"\"FormId\": \"SAL_OUTSTOCK\",\n" +
"\"FieldKeys\":\"FXSDDBH,FCUSTMATID.FNumber,FSrcBillNo,FRealQty,FCustMatName,FBillNo,F_TKSN_Text4,FXH,FMaterialID.F_TKSN_Decimal,FCustomerID.FNumber,FCustomerID.FShortName,F_ora_BaseProperty\",\n" +
"\"FilterString\": \"FSrcBillNo='"+ billno+"'\",\n" +
"\"OrderString\": \"\",\n" +
"\"TopRowCount\": 0,\n" +
"\"StartRow\": 0,\n" +
"\"Limit\": 0,\n" +
"\"SubSystemId\": \"\"\n" +
"}";
```

## 物料api接口

```json
 "{\n" +
"\"FormId\": \"BD_MATERIAL\",\n" +
"\"FieldKeys\":\"FMATERIALID,FName,FNumber,FSpecification,F_TKSN_Decimal,F_ora_Integer1,F_ora_Integer2,FGROSSWEIGHT,FNETWEIGHT,FOldNumber,FBaseProperty,FWS.FDataValue,FWC.FDescription,FDY.FDataValue,FBZ.FDataValue,FZZ.FDataValue \",\n" +
"\"FilterString\": \"FUseOrgId1.FNumber='901'\",\n" +
"\"OrderString\": \"\",\n" +
"\"TopRowCount\": 0,\n" +
"\"StartRow\": 0,\n" +
"\"Limit\": 0,\n" +
"\"SubSystemId\": \"\"\n" +
"}";
```

## COC模板创建
```sql
USE [ZCTMIS]
select * from PZ_CocPrintMode
GO
INSERT INTO [dbo].[PZ_CocPrintMode]
([Id] ,[ModeName],[Custid],[IsDeleted],[CreationTime],[CreateTime],[Creator],[UpdateTime],[Updater],[DeleteTime],[Deleter],[ModeType],[FullName])
VALUES
('12','万兴报告','ALL',0,GETDATE(),GETDATE(),'admin',NULL,NULL,NULL,NULL,1        ,'HKR.MIS.Winforms.FormsBusiness.QtyControl.CocReport.IqcReport.Report.MillionBestReport');
GO
```

