#==========================================
# Algoritmo 1
#==========================================
# Serie exponencial 
# Factorizacion de x 
# Negativos con funcion inversa 
#===========================================
n = 200
x = -100.0
flag = False 
if x<0:
  flag = True
  x= -x
   
s= 1.0 
for i in range(n,0,-1):#De valor de n en este caso 200 hasta 0 de -1 en -1 , este valor toma i
    s *= x/float(i)
    s += 1.0
print(s)    
if flag == True:
  s = 1/s 
print(s)  
      
