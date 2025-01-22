# rock-paper-scissors


1. Escribir la logica de lo que hace la computadora ( getComputerChoice)
2. Escribir la logica de lo que hace el humano (getHumanChoice)

       La computadora tiene que generar aleatoriamente un numero del 1 al 3.
       Luego se le asignan las palabras Piedra, Papel o Tijera a los numeros 1,2,3. 
       1. Piedra, 2. Papel, 3. Tijera. 
       GUARDO ESA VARIABLE.
       Computer no debe mostrar el resultado hasta que humano decida su eleccion
       
       El humano hace input entre Piedra Papel o Tijera.
       Estandarizo el string para admitir que el usuario pueda ingresar su opcion con mayusculas y minusculas de la forma que quiera.
       Guardo la variable
	Se comparan los resultados (defineWinner)
Piedra > Tijera>Papel>Piedra.
PSEUDO. 
1. Para la Computer. Voy a crear una funcion Math random que me traiga numeros enteros entre el 1 y el 3.
2. Cada uno de esos numeros tendrá asignado piedra, papel o tijera.
- SI 1 => Papel
-SI 2 => Tijera
-Si 3 => Piedra.
El resultado se guardará y se retornará en una variable ComputerChoice Y será un string con alguna de las tres palabras.
3. Luego para el humano, voy a crear una función que tome la elección del usuario. Este input si será en TEXTO directamente.(input manual) , la voy a validar y luego estandarizar (mayusc,minusc)(y la voy a guardar en una variable userChoice
Luego voy a llamar a DetermineWinnner, una funcion que devuelva un resultado despues de comparar userChoice y computerChoice
Las comparaciones son:


- Si eleccion Usuario =Piedra & Eleccion computer = tijera =>>> Gana usuario
- Si eleccion Usuario = Piedra & eleccion computer = Papel =>>> Gana computer
- Si eleccion Usuario = Piedra & eleccion computer = PIedra =>>> Empate
- Si eleccion Usuario = Papel & eleccion Computer = tijera =>> Gana Computer
- Si eleccion Usuario = Papel & eleccion Computer = Papel =>> Empate
- Si eleccion Usuario = Papel & eleccion computer = PIedra =>>> Gana Usuario
- Si eleccion Usuario = Tijera & eleccion Computer = tijera =>> Empate

- Si eleccion Usuario = Tijera & eleccion Computer = Papel =>> Gana usuario
- Si eleccion Usuario = Tijera & eleccion computer = PIedra =>>> Gana Computer.

