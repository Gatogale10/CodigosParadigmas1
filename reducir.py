#==========================================
# Uso de reducciones (colapsar resultados)
#==========================================

#===================================================
# Multiplicación de todos los numeros en la lista 
#===================================================

from functools import reduce 

bigdata = [2,3,5,7,11,13,17,19,23,29]

#==============
# Funcion x*y
#==============
multiplicar  = lambda x,y: x*y

print(reduce(multiplicar,bigdata))
#===================================================================
# Toma los dos primeros elementos
# y les aplica la operaccion designada en lamba
# Este elemento resultado de la operacion es tomado de nuevo con el
#el siguiente elemento y se le aplica la funcion por pares nuevamente
# y asi hasta el ultimo elemento
#=================================================================

#===========================================================
# Reduce le aplica la funcion por pares a los resulatados y
# el siguiente elemento comenzando con los dos primeros 
# elementos.
#===========================================================
