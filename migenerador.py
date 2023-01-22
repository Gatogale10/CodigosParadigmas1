def migenerador():
    print("Primero")
    yield 10 
    print("Segundo")
    yield 20
    print("Tercero")
    yield 30
#yield se utliza para pausar y reanudar una funcion generadora 
#O sea que va y saca el elemento que contiene con sigo y pone pausa a la funcion 
#en donde fue llamada, esto realiza con el next  

#Dato de tipo gen
gen = migenerador()
#Al aplicarle next entra a la funcion y devuelve print("Primero") y yield devuelve su valor y pone pausa
#para no seguir devolviendo mas datos
vall = next(gen)
print(vall)
val2 = next(gen)
print(val2)
val3 = next(gen)
print(val3)

