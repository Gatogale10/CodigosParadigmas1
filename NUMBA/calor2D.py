import numpy as np 
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib import cm 
import time 

#=============================
# Numero de celas 
n = np.array([512,512])
# Tamaño menor del dominio (menor que uno)
L = np.array([1.0,1.0])
# Constante de difusion 
k = 2.0
# Pasos de tiempo
pasos = 100
#====================================

# Tamaño de las celdas 

dx = L/n
udx2= 1.0/(dx*dx)
# Paso de tiempo 
dt = 0.25*(min(dx[0],dx[1])**2)/k
print("dt",dt)
# Total de celdas
nt = n[0]*n[1]
print("celdas =",nt)
# Llenar la solucion con ceros 
u = np.zeros(nt,dtype=np.float64)
un = np.zeros(nt,dtype=np.float64)

def evolucion(u,n,udx2,dt,i,k):
    jp1 = i + n[0]
    jm1 = i-n[0]
    laplaciano = (u[i-1]-2.0*u[i]+u[i+1]*udx2[0])+ (u[jm1]-2.0*u[i]+u[jp1])*udx2[1]
    unueva = u[i] + dt*k*laplaciano
    return unueva
   
    

