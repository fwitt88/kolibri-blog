---
title: "Margen de contribución: el concepto de la universidad que nadie aplica en su propia clínica"
description: "El margen de contribución se enseña en cualquier carrera de negocios. Pocas veces se explica bien, y casi nunca se aplica a una clínica dental. Esto es lo que aprendí usándolo en la industria minera, y cómo se traduce a la odontología."
pubDate: 2026-08-25
author: Florian
readingTime: 6
---

> **Respuesta directa:** El margen de contribución es lo que queda de un tratamiento después de restar solo los costos variables (materiales, laboratorio), antes de tocar los costos fijos. Es una herramienta clásica de controlling que permite comparar tratamientos entre sí y tomar decisiones de precio con criterio, no con intuición.

En cualquier carrera de negocios se enseña el concepto de margen de contribución. Aparece en los primeros semestres, normalmente como una fórmula: ingresos menos costos variables. Se aprende, se rinde el examen, y para muchos ahí termina la historia.

Yo pensaba lo mismo hasta que empecé a trabajar.

---

## De la teoría al escritorio real

Mi primer trabajo en controlling fue en K+S, una empresa minera de sal en Chile. Ahí entendí que el margen de contribución no es un ejercicio académico. Es la herramienta que usábamos, todos los días, para decidir qué producto priorizar, qué cliente valía la pena, y dónde estaba realmente el negocio.

En minería, no todos los productos son iguales aunque salgan de la misma mina. Cada línea de producto tiene su propio precio, su propio costo variable, y por lo tanto su propio margen. Ahí es donde el concepto se vuelve práctico: no basta con saber cuánto factura cada producto, hay que saber cuánto *deja* cada uno.

En el mundo del controlling esto se trabaja en niveles. El primero, que se conoce como MC I (margen de contribución I), es el más simple: ingresos menos costos variables directos. Y en el fondo responde una pregunta bastante básica: ¿el precio que cobras siquiera cubre lo que gastaste en hacer el tratamiento? Si el MC I es negativo, la decisión es simple — subes el precio o dejas de ofrecer ese tratamiento. No hay mucho más que analizar ahí.

Donde el análisis se vuelve realmente útil es en los niveles siguientes. El MC II descuenta además costos variables indirectos o específicos de una línea, por ejemplo el desgaste de un instrumental que solo se usa para cierto tipo de procedimiento, o el tiempo de un especialista externo. El MC III puede incorporar costos semi-fijos que se pueden atribuir a un grupo de tratamientos, como el contrato de mantención de un equipo que solo se usa para ortodoncia. Y así, dependiendo de la complejidad del negocio, se puede seguir bajando hasta un MC IV o más, cada uno restando una capa más específica de costos.

La razón por la que esto importa es que cada nivel responde una pregunta distinta. El MC I te dice si vale la pena cobrar ese precio. El MC II y III te dicen si vale la pena mantener esa línea de tratamiento, esa especialidad, o esa inversión en equipamiento — una vez que se le atribuyen los costos que específicamente le pertenecen, y no solo los costos variables directos.

En SAP, hay una transacción que cualquier controller conoce bien: CO-PA, que permite ver exactamente estos márgenes por producto, por cliente, por región. Yo la usé cientos de veces. Pero la lógica detrás de CO-PA no necesita SAP para funcionar. Se puede calcular perfectamente a mano, con una planilla, o con cualquier sistema que tenga los datos correctos organizados.

## Lo mismo, aplicado a una clínica dental

La lógica es idéntica en una clínica dental. Solo que en lugar de productos minerales, tienes tratamientos.

Toma tres ejemplos, con tiempos de sillón realistas:

| Tratamiento | Ingreso | Costo variable (materiales + laboratorio) | Margen de contribución | Tiempo de sillón | MC por hora |
|---|---|---|---|---|---|
| Resina clase II | $30.000 | $6.000 | $24.000 | 30 min | $48.000 |
| Endodoncia | $110.000 | $45.000 | $65.000 | 90 min | $43.333 |
| Blanqueamiento | $95.000 | $28.000 | $67.000 | 90 min | $44.667 |

A primera vista, el blanqueamiento parece el tratamiento más rentable: es el que deja más margen en pesos por caso. Pero el margen de contribución en pesos por tratamiento no es lo mismo que el margen de contribución por hora de sillón, que es el recurso realmente limitado en una clínica. Cuando divides el margen por el tiempo que ocupa cada tratamiento, la resina, a pesar de tener el margen más bajo en pesos, es la que más rinde por hora. Ese es exactamente el tipo de comparación que el margen de contribución permite hacer, y que la intuición sola no puede.

Este es el mismo ejercicio que hacíamos con las líneas de producto en minería, aplicado a un sillón dental en vez de a una faena.

## Por qué esto importa para decidir precios

Sin este cálculo, fijar precios se convierte en una mezcla de lo que cobra la competencia y lo que "se siente correcto". Pero el margen de contribución no solo sirve para comparar tratamientos que ya tienen precio. Sirve para definir el precio en primer lugar: si sabes cuánto quieres ganar por hora de sillón, y conoces el costo variable de un tratamiento, puedes calcular hacia atrás el precio mínimo que necesitas cobrar para alcanzar ese margen. Esa es la aplicación que casi nadie hace, y es la más útil de todas.

Con el margen de contribución claro, la pregunta también cambia hacia adelante: ¿qué tratamientos me conviene priorizar en mi agenda? ¿Vale la pena bajar el precio de un tratamiento si eso significa llenar más horas? ¿Qué tratamiento realmente sostiene la operación de la clínica?

Ninguna de estas preguntas tiene una respuesta intuitiva confiable. Todas tienen una respuesta calculable.

## Controlling no tiene que dar miedo

Durante años intenté explicar este concepto a personas fuera del mundo financiero, y casi nunca encontraba las palabras correctas. "Margen de contribución" suena técnico, y las fórmulas con números romanos (DB I, DB II, DB III) suenan todavía más intimidantes.

Pero la idea de fondo es simple: **saber cuánto te deja cada cosa que haces, antes de mezclar todo con los costos fijos.** Eso no requiere un título en finanzas ni memorizar la diferencia entre MC I y MC IV. Requiere organizar la información correctamente, una sola vez, y después solo mirarla.

El margen de contribución por tratamiento es exactamente el tipo de cálculo que Kolibri Dental está pensado para automatizar: no reemplaza el criterio del dentista, pero le da el número que necesita para ejercerlo.

Controlling no tiene que ser complicado. Solo necesita que alguien lo explique bien una vez.

---

*¿Sabes cuál de tus tratamientos deja más margen por hora de sillón, y no solo por caso?*
