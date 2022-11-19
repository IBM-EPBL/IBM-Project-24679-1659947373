from __future__ import print_function
from flask import Flask, render_template, url_for, request, redirect, session
import sqlite3 as sql
import re
import ibm_db
conn =ibm_db.connect("DATABASE=bludb;HOSTNAME=0c77d6f2-5da9-48a9-81f8-86b520b87518.bs2io90l08kqb1od8lcg.databases.appdomain.cloud;PORT=31198;SECURITY=SSL;SSLServerCertificate=].crt;UID=jbr47770;PWD=KyFyRi1VZdLEOjSI",   '','')

app=Flask(__name__)
app.secret_key ='shreesathyam'

@app.route('/')
def signin():
    return render_template('signin.html')

@app.route('/removeproduct/<id>')
def removeproduct(id):
    sql = "DELETE from products where product_name = '{}'".format(id)
    # stmt = ibm_db.prepare(conn,sql)
    # ibm_db.bind_param(stmt,1,id)
    ibm_db.exec_immediate(conn,sql)
    return redirect(url_for('home'))




@app.route('/login',methods =['GET', 'POST'])
def login():
    global userid
    msg = ''
   
  
    if request.method == 'POST' :
        un = request.form['username']
        pd = request.form['password']
        sql = "SELECT * FROM register WHERE username = ? AND password=?"
        stmt = ibm_db.prepare(conn, sql)
        ibm_db.bind_param(stmt,1,un)
        ibm_db.bind_param(stmt,2,pd)
        ibm_db.execute(stmt)
        account = ibm_db.fetch_assoc(stmt)
        print (account)
        if account:
            session['loggedin'] = True
            session['id'] = account['USERNAME']
            userid=  account['USERNAME']
            session['username'] = account['USERNAME']
            msg = 'Logged in successfully !'
            
            return redirect(url_for('home', msg = msg))
        else:
            msg = 'Incorrect username / password !'
    return render_template('signin.html', msg = msg)


@app.route('/addproduct', methods =['POST', 'GET'])
def addproduct():
    msg = ''
    if request.method == "POST":

        productName = request.form['productname'] 
        quautity = request.form['quantity'] 
        price = request.form['price'] 
        description = request.form['description'] 
        category = request.form['category'] 
        image = request.form['image'] 

        sql = 'INSERT INTO Products VALUES (?,?,?,?,?,?)'
        pstmt = ibm_db.prepare(conn, sql)
        ibm_db.bind_param(pstmt,1,productName)
        ibm_db.bind_param(pstmt,2,quautity)
        ibm_db.bind_param(pstmt,3,description)
        ibm_db.bind_param(pstmt,4,image)
        ibm_db.bind_param(pstmt,5,price)
        ibm_db.bind_param(pstmt,6,category)
        ibm_db.execute(pstmt)
        return redirect(url_for('home'))



    return render_template("addProduct.html", msg = "")


@app.route('/home', methods =['POST', 'GET'])
def home():
    sql='SELECT * FROM products'
    stmt = ibm_db.prepare(conn, sql)
    ibm_db.execute(stmt)
    products = []
    while ibm_db.fetch_row(stmt) != False:
        product ={
            'productName': ibm_db.result(stmt,0),
            'quantity' : ibm_db.result(stmt,1),
            'price' : ibm_db.result(stmt,4),
            'description' : ibm_db.result(stmt,2),
            'category' : ibm_db.result(stmt,5),
            'image' : ibm_db.result(stmt,3)
        }
        products.append(product)
    print(products)
    return render_template("index.html", msg = "", products = products)

        
@app.route('/accessbackend', methods=['POST','GET'])
def accessbackend():
    mg=''
    if request.method == "POST":
        username=request.form['username']
        email=request.form['email']
        pw=request.form['password'] 
        sql='SELECT * FROM register WHERE EmailID = ?'
        stmt = ibm_db.prepare(conn, sql)
        print(email)
        ibm_db.bind_param(stmt,1,email)
        ibm_db.execute(stmt)
        acnt=ibm_db.fetch_assoc(stmt)
        print(acnt)
            
        if acnt:
            mg='Account already exits!!'
            
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            mg='Please enter the avalid email address'
        elif not re.match(r'[A-Za-z0-9]+', username):
            ms='name must contain only character and number'
        else:
            insert_sql='INSERT INTO register VALUES (?,?,?)'
            pstmt=ibm_db.prepare(conn, insert_sql)
            ibm_db.bind_param(pstmt,1,username)
            ibm_db.bind_param(pstmt,2,email)
            ibm_db.bind_param(pstmt,3,pw)
            ibm_db.execute(pstmt)
            mg='You have successfully registered click signin!!'
            return render_template("signin.html")    

            
            
         
    elif request.method == 'POST':
        msg="fill out the form first!"
    return render_template("signup.html",meg=mg)    

 


if __name__ == '__main__':
    app.run(debug=True)
