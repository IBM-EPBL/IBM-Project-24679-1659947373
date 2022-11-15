import ibm_db
from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
global conn
try: 
    conn = ibm_db.connect('DATABASE=bludb;HOSTNAME=0c77d6f2-5da9-48a9-81f8-86b520b87518.bs2io90l08kqb1od8lcg.databases.appdomain.cloud;PORT=31198;SECURITY=SSL;SSLServerCertificate=DigiCertGlobalRootCA.crt;UID=wsj61209;PWD=38i48sUIlCxGGsN2', '', '')
    print("conn success")
except:
    print("conn error ")

@app.route("/login" ,methods=['POST'])
@cross_origin()
def login():
    email = request.form['email']
    password = request.form['password']
    stmt = ibm_db.exec_immediate(conn,"Select password,user_id from wsj61209.users where email_id='"+email+"'")
    result = {"message":"fail","user_id":""}
    if ibm_db.fetch_row(stmt) != False and ibm_db.result(stmt,0)==password:
        result["message"] = "success"
        result["user_id"] = ibm_db.result(stmt,1)
    print(result)
    return result

@app.route("/signup", methods=['POST'])
@cross_origin()
def signup():
    result = {}
    email = request.form['email']
    if mailExists(email):
        result["message"] = "fail" 
    else:
        insert = "insert into wsj61209.users(name,email,password) values('"+request.form['name']+"','"+request.form['email']+"','"+request.form['password']')"
        ibm_db.exec_immediate(conn,insert)
        result["message"] = "success"
    return result

def mailExists(email):
    result = False
    stmt = ibm_db.exec_immediate(conn,"Select user_id from TLF61984.users where email_id='"+email+"'")
    if ibm_db.fetch_row(stmt) != False:
        result = True
    return result

@app.route("/getstocks", methods=['POST'])
@cross_origin()
def getstocks():
    stocks = []
    useremail = request.form['useremail']
    print(useremail)
    stmt = ibm_db.exec_immediate(conn,"Select * from wsj61209.stock where useremail='"+useremail+"'")
    while ibm_db.fetch_row(stmt) != False:
        stock = {}
        stock["stockid"] = ibm_db.result(stmt,0)
        stock["name"] = ibm_db.result(stmt,1)
        stock["quantity"] = ibm_db.result(stmt,2)
        stock["minvalue"] = ibm_db.result(stmt,3)
        stock["price"] = ibm_db.result(stmt,4)
        stock["category"] = ibm_db.result(stmt,5)
        stock["useremail"] = ibm_db.result(stmt,6)
        stocks.append(stock)
    return stocks


@app.route("/addstock", methods=['POST'])
@cross_origin()
def addstock():
    result = {}
    name = request.form['name']
    useremail = request.form['useremail']
    insert = "insert into wsj61209.stock(name,quantity,minvalue,price,category,useremail) values('"+name+"',"+request.form['quantity']+","+request.form['minvalue']+","+request.form['price']+",'"+request.form['category']+"','"+useremail+"')"
    ibm_db.exec_immediate(conn,insert)
    result["message"] = "Stock Created SuccessFully"
    return result

@app.route("/deletestock", methods=['POST'])
@cross_origin()
def deletestock():
    result = {}
    stockid = request.form['stockid']
    ibm_db.exec_immediate(conn,"delete from TLF61984.stock where stockid="+stockid)
    result["message"] = "Stock deleted SuccessFully" 
    return result

@app.route("/updatestock", methods=['POST'])
@cross_origin()
def updatestock():
    result = {}
    stockid = request.form['stockid']
    name = request.form['name']
    ibm_db.exec_immediate(conn,"update wsj61209.stock set name='"+name+"',quantity="+request.form['quantity']+",minvalue="+request.form['minvalue']+",price="+request.form['price']+",category='"+request.form['category']+"' where  stockid="+stockid)
    result["message"] = "Stock updated SuccessFully"
    return result