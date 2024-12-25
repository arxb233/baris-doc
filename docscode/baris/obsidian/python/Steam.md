---
title: 基于Selenium工具对steam进行自动改密换绑令牌
date: 2023-10-17 10:43:01
tags:
top_img: https://www.acfun.cn/imageProxy?url=https://img2.ali213.net/picfile/News/2021/09/24/584_20210924715466.jpg
cover: https://www.acfun.cn/imageProxy?url=https://img2.ali213.net/picfile/News/2021/09/24/584_20210924715466.jpg

---
# 基于Selenium工具对steam进行自动改密换绑令牌

:::tip 著作说明
改文档为原创文档，转载请标注作者和出处
::: 

## 一.selenium介绍

Selenium 是一个自动化测试工具和框架，用于模拟用户与 Web 应用程序的交互。它最初是为自动化 Web 测试而开发的，但后来被广泛用于各种 Web 自动化任务，包括数据抓取、网页截图、自动填写表单、模拟用户操作等。
## 二.基于Python的selenium网页自动化

使用 Python 和 Selenium 来进行网页自动化是一种常见的方法，允许你模拟用户在网页上的操作。以下是一个简单的示例，演示如何使用 Python 和 Selenium 进行网页自动化：

```python
# 导入必要的库
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# 创建一个浏览器驱动，例如使用 Chrome
driver = webdriver.Chrome()

# 打开网页
driver.get("https://www.example.com")

# 找到网页上的元素并与之交互
search_box = driver.find_element_by_name("q")  # 通过元素的名称找到输入框
search_box.send_keys("Selenium Python")  # 在输入框中输入文本
search_box.send_keys(Keys.RETURN)  # 模拟按下回车键

# 等待一段时间，以确保页面加载完毕
driver.implicitly_wait(10)

# 获取页面标题
print("页面标题:", driver.title)

# 关闭浏览器
driver.quit()
```
在上述示例中，我们首先导入 Selenium 库并创建一个浏览器驱动（这里使用的是 Chrome 浏览器）。然后，我们打开一个网页，找到页面上的输入框，输入文本并模拟按下回车键。接下来，我们等待一段时间以确保页面加载完毕，然后获取页面标题并关闭浏览器。

这只是一个简单的示例，Selenium 提供了许多功能来与网页进行交互，包括点击按钮、填写表单、截取屏幕截图等。你可以根据你的需求和特定的网页结构来编写更复杂的自动化脚本。确保你已安装 Selenium 库，并根据你使用的浏览器选择相应的浏览器驱动。

## 三.Chromedriver安装教程

### 1.下载对应的Chromedriver版本

首先，打开的谷歌浏览器，找到目前你谷歌浏览器的版本。（打开设置，点击关于谷歌就能看到，如下图）

![](https://img-blog.csdnimg.cn/023a4fb01bdc4ac7a9a2b834541bf9ee.jpeg#pic_center)

然后chromedriver的版本一定要与Chrome的版本一致，不然下载不对应的版本，没作用。

下面有两个下载地址：

1.https://npm.taobao.org/mirrors/chromedriver/

2.http://chromedriver.storage.googleapis.com/index.html

![](https://img-blog.csdnimg.cn/70c888dacf83458888a98c90b2b5d490.jpeg#pic_center)

### 2.安装

将你下载的压缩包移动到chrome的安装目录下（不知道的，可以从谷歌图标那里打开文件所在位置得知）。然后解压压缩包，选择解压到当前文件夹，如下图。

![](https://img-blog.csdnimg.cn/2021060710072262.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTEwOTY4NA==,size_16,color_FFFFFF,t_70)

## 四.Steam网页自动化（脚本作者~安然_Baris）

## 1.所需要的库
```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from urllib.parse import urlparse, parse_qs
import time
import pymysql
import random
import string
import json
```
### 2.chrome设置
```python
# Chrome设置
def setup_chrome():
    # 设置驱动程序路径
​    driver_path = r'chromedriver.exe'

    # 创建Chrome选项对象
​    chrome_options = webdriver.ChromeOptions()
​    chrome_options.add_argument('--disable-blink-features=AutomationControlled')
​    chrome_options.add_experimental_option('excludeSwitches', ['enable-automation'])

    # 添加驱动程序路径
​    chrome_options.add_argument('webdriver.chrome.driver=' + driver_path)

    # 创建Chrome浏览器实例
​    driver = webdriver.Chrome(options=chrome_options)
​    return driver
```
### 3.mysql数据库连接
```python
def connect_to_mysql(host, user, password, database):
    try:
        connection = pymysql.connect(host=host, user=user, password=password, database=database)
        print("已连接到MySQL数据库！")
        return connection
    except pymysql.Error as e:
        print(f"连接到MySQL数据库时发生错误：{e}")
        return None

def execute_query(connection, query):
    try:
        cursor = connection.cursor()
        cursor.execute(query)
        result = cursor.fetchall()
        cursor.close()
        return result
    except pymysql.Error as e:
        print(f"执行查询时发生错误：{e}")
        return None
```
### 4.登录功能
```python
# 登录功能
def login(driver, user, password):
    # 打开网站登录页面
    driver.get('https://store.steampowered.com/login/?redir=&redir_ssl=1&snr=1_4_4__global-header')

    # 定位到登录表单
    wait = WebDriverWait(driver, 25)
    login_form = wait.until(EC.presence_of_element_located((By.CLASS_NAME, "newlogindialog_LoginForm_3Tsg9")))

    # 找到用户名输入框并输入账号
    username_field = login_form.find_element(By.XPATH, "//*[@id='responsive_page_template_content']/div[3]/div[1]/div/div/div/div[2]/div/form/div[1]/input")

    # 找到密码输入框并输入密码
    password_field = login_form.find_element(By.XPATH, "//*[@id='responsive_page_template_content']/div[3]/div[1]/div/div/div/div[2]/div/form/div[2]/input")

    # 输入用户名和密码
    username_field.send_keys(user)
    password_field.send_keys(password)

    # 找到登录按钮并点击
    login_button = login_form.find_element(By.XPATH, "//*[@id='responsive_page_template_content']/div[3]/div[1]/div/div/div/div[2]/div/form/div[4]/button")
    login_button.click()
```

### 5.输入令牌

```python
#令牌
def query_and_fill_sdk(driver, user):
    # 定位到sdk，找到框
​    Sdk_form = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//*[@id='responsive_page_template_content']/div[3]/div[1]/div/div/div/div[2]/form")))

​    Sdk1 = Sdk_form.find_element(By.XPATH, "//*[@id='responsive_page_template_content']/div[3]/div[1]/div/div/div/div[2]/form/div/div[2]/div[1]/div/input[1]")
​    Sdk2 = Sdk_form.find_element(By.XPATH, "//*[@id='responsive_page_template_content']/div[3]/div[1]/div/div/div/div[2]/form/div/div[2]/div[1]/div/input[2]")
​    Sdk3 = Sdk_form.find_element(By.XPATH, "//*[@id='responsive_page_template_content']/div[3]/div[1]/div/div/div/div[2]/form/div/div[2]/div[1]/div/input[3]")
​    Sdk4 = Sdk_form.find_element(By.XPATH, "//*[@id='responsive_page_template_content']/div[3]/div[1]/div/div/div/div[2]/form/div/div[2]/div[1]/div/input[4]")
​    Sdk5 = Sdk_form.find_element(By.XPATH, "//*[@id='responsive_page_template_content']/div[3]/div[1]/div/div/div/div[2]/form/div/div[2]/div[1]/div/input[5]")

    # 连接到MySQL数据库
​    connection = connect_to_mysql("*", "*", "*", "*")
​    if connection:
​        try:
            # 执行查询
​            query = "select steamSdk from steamid where id='" + user + "';"  # 替换为您要查询的表名
​            result = execute_query(connection, query)

            # 处理查询结果
​            if result and len(result) == 1:
​                query_result = result[0][0]  # 假设查询结果是一个长度为五的字符串

                # 将查询结果拆分为单个字符，并分别赋值给五个变量
​                Sdk1.send_keys(query_result[0])
​                Sdk2.send_keys(query_result[1])
​                Sdk3.send_keys(query_result[2])
​                Sdk4.send_keys(query_result[3])
​                Sdk5.send_keys(query_result[4])
​                time.sleep(5)

​        finally:
            # 关闭数据库连接
​            connection.close()
```
### 6.切换到邮箱更改密码
```python
def open_change_email_page(driver,wait):
    # 切换到邮箱更改
​    time.sleep(5)
​    driver.get("https://store.steampowered.com/account/")

    # 点击更换邮箱
​    Emalia = wait.until(EC.presence_of_element_located((By.XPATH, "//*[@id='main_content']/div[2]/div[4]/div[1]/div[3]/a")))
​    Emalia.click()

​    current_url = driver.current_url
​    print("Current URL:", current_url)

​    wizard_contents = wait.until(EC.presence_of_element_located((By.XPATH, "//*[@id='wizard_contents']/div/a[2]")))
​    wizard_contents.click()
​    return current_url
```
### 7.
```python
def verify_steam_password(driver, password,wait):
    # 等待确认
​    time.sleep(20)

​    wizard_contents = wait.until(EC.presence_of_element_located((By.XPATH, "//*[@id='wizard_contents']/div/a[3]")))
​    wizard_contents.click()

    # 定位到密码Form
​    password_form = wait.until(EC.presence_of_element_located((By.XPATH, "//*[@id='verify_password_form']")))
​    password_field2 = password_form.find_element(By.XPATH, "//*[@id='verify_password']")
​    password_field2.send_keys(password)

    # 找到继续按钮并点击
​    password_button = password_form.find_element(By.XPATH, "//*[@id='verify_password_submit']/input")
​    password_button.click()
```
### 8.改变邮箱
```python
def change_steam_email(driver, email,wait):
    # 定位到改变Form
​    email_form = wait.until(EC.presence_of_element_located((By.XPATH, "//*[@id='change_email_form']")))
​    email_field = email_form.find_element(By.XPATH, "//*[@id='email_reset']")
​    email_field.send_keys(email)
​    email_button = email_form.find_element(By.XPATH, "//*[@id='change_email_area']/input")
​    email_button.click()
```
### 9.获取接受邮箱的验证码
```python
def login_and_get_verification_code(driver, email, emailpss,wait):
    # 在当前页的基础上，通过JavaScript打开新页签
​    driver.execute_script("window.open();")

    # 切换到新打开的标签页
​    driver.switch_to.window(driver.window_handles[1])

    # 在新页签中导航到另一个网页
​    driver.get("你的邮箱地址")

    # 定位到邮箱登录Form
​    Email_Login_form = wait.until(EC.presence_of_element_located((By.XPATH, "//*[@id='login-form']")))
​    Email_Login_user = Email_Login_form.find_element(By.XPATH, "//*[@id='rcmloginuser']")
​    Email_Login_pass = Email_Login_form.find_element(By.XPATH, "//*[@id='rcmloginpwd']")
​    Email_Login_button = Email_Login_form.find_element(By.XPATH, "//*[@id='rcmloginsubmit']")

​    Email_Login_user.send_keys(email)
​    Email_Login_pass.send_keys(emailpss)
​    Email_Login_button.click()

​    time.sleep(5)
    # 找到表格元素
​    table = wait.until(EC.presence_of_element_located((By.XPATH, "//table[@id='messagelist']")))

    # 找到 tbody 元素
​    tbody = table.find_element(By.TAG_NAME, "tbody")

    # 找到 tbody 中的第一个 tr 元素
​    first_tr = tbody.find_element(By.TAG_NAME, "tr")

    # 找到第一个 tr 中的第二个 td 元素
​    second_td = first_tr.find_elements(By.TAG_NAME, "td")[1]

    # 找到第一个 tr 中的第二个 td 元素下的第二个 span 元素
​    second_span = first_tr.find_elements(By.TAG_NAME, "span")[3]

    # 点击第一个 a 链接
​    second_span.click()

​    time.sleep(5)

    # 定位到邮件Form
​    emailid_form = wait.until(EC.presence_of_element_located((By.XPATH, "//*[@id='messagecontframe']")))

    # 进入 iframe
​    driver.switch_to.frame(emailid_form)

    # 使用 XPath 定位 K42RC 元素
​    xpath_expression = '//td[@class="v1title-48 v1c-blue1 v1fw-b v1a-center"]'
​    element = driver.find_element(By.XPATH, xpath_expression)

    # 获取 K42RC 的文本值
​    k42rc_value = element.text

​    driver.switch_to.default_content()

    # 切换回第一个标签页
​    driver.switch_to.window(driver.window_handles[0])

​    return k42rc_value
```
### 10.更改steam邮箱
```python
#----------------------------------------更改邮箱--------------------------------------
def change_steam_email_and_update_db(driver, k42rc_value, email, user,wait):
    def wait_and_click(xpath):
        element = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, xpath)))
        element.click()

    # 定位到改变Form
​    confirm_email = wait.until(EC.presence_of_element_located((By.XPATH, "//*[@id='confirm_email_form']")))
​    confirm_email_field = confirm_email.find_element(By.XPATH, "//*[@id='email_change_code']")
​    confirm_email_field.send_keys(k42rc_value)
​    confirm_email_button = confirm_email.find_element(By.XPATH, "//*[@id='confirm_email_form']/div[2]/input")
​    confirm_email_button.click()

    # 连接到MySQL数据库
​    connection = connect_to_mysql("*", "*", "*", "*")
​    if connection:
​        try:
            # 执行查询
​            query = "UPDATE steamid SET EMail= '"+email+"' WHERE id = '"+user+"';"  # 替换为您要查询的表名
​            result = execute_query(connection, query)
​            connection.commit()

​        finally:
            # 关闭数据库连接
​            connection.close()
```
### 11.解锁红锁
```python
def change_steam_password(driver, password, user,current_url,wait):
    def wait_and_click(xpath):
        element = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, xpath)))
        element.click()

    # 解析URL
​    parsed_url = urlparse(current_url)

    # 获取查询参数
​    query_params = parse_qs(parsed_url.query)

    # 提取's'和'account'的值
​    s_value = query_params.get('s', [None])[0]
​    account_value = query_params.get('account', [None])[0]

​    password_url = "https://help.steampowered.com/zh-cn/wizard/HelpWithLoginInfoReset/?s=" + s_value + "&account=" + account_value + "&reset=1&lost=2"

​    time.sleep(5)
​    driver.get(password_url)
​    print("Password URL:", password_url)

    # 生成随机密码并打印
​    passwordre = generate_random_password()
​    print("随机密码：", passwordre)

    # 定位到改变密码Form
​    change_password_form = wait.until(EC.presence_of_element_located((By.XPATH, "//*[@id='change_password_form']")))
​    change_password_form_field = change_password_form.find_element(By.XPATH, "//*[@id='password_reset']")
​    change_password_form_field.send_keys(passwordre)
​    change_password_form_field2 = change_password_form.find_element(By.XPATH, "//*[@id='password_reset_confirm']")
​    change_password_form_field2.send_keys(passwordre)

​    time.sleep(5)
​    change_password_form_button = change_password_form.find_element(By.XPATH, "//*[@id='change_password_form']/div[3]/input")
​    change_password_form_button.click()

​    time.sleep(5)
    # 连接到MySQL数据库
​    connection = connect_to_mysql("*", "*", "*", "*")
​    if connection:
​        try:
            # 执行查询
​            query = "UPDATE steamid SET PasswordNew= '"+password+"' WHERE id = '"+user+"';"  # 替换为您要查询的表名
​            query2 = "UPDATE steamid SET Password= '"+passwordre+"' WHERE id = '"+user+"';"  # 替换为您要查询的表名
​            result = execute_query(connection, query)
​            result2 = execute_query(connection, query2)
​            connection.commit()

​        finally:
            # 关闭数据库连接
​            connection.close()
​    return passwordre
```

## 五.脚本思路
  ~此脚本通过使用selenium的自动化测试项目，实现steam的批量改密以及批量换绑邮箱。
  ~该项目的思路为，使用selenium进行自动化测试，其中需要填写的数据从数据库获取。
  ~实现批量账号密码可以通过写外部程序对该脚本进行调用，每次执行调用一个脚本。
  ~其中selenium的动态令牌，可以魔改开源的sdk进行写入数据库脚本查询，也可以将sdk代码拿出到外部程序中调用脚本的同时进行生成。
  ~此代码仅供技术分享，本作者不对其使用用途进行负责，也请不要用于非法用途。