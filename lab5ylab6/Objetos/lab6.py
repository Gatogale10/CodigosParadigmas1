from aplicacion.banco.cliente_bancario import ClienteBancario

#================================================
# Try: intenta (correr las instrucciones)
# except: atrapar el error en una variable e 
#===============================================

#===========================================
# Error por sacar mas dinero del que tiene 
#===========================================

try:
  cliente = ClienteBancario("Jaime Andrade", "Hernandes Sanchez",28,0.0)
  cliente.guardarDinero(300)
  print(cliente.imprimirInfo())
  cliente.retirarDinero(400)
  print(cliente.imprimirInfo())
#=============================================
# Exception es el objeto mas general de error
#============================================
except Exception as e:
  print("Error: " + str(e))
#=========================================
#Error por usar un atributo privado
#========================================
try:
  print(cliente.__nombres)
except Exception as ex:
  print("Error" + str(ex))
#===================
# Forma correcta 
#===================
print(cliente.nombres)
                

