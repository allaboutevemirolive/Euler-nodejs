Generate nodejs with playwright for the task below to get the data from the target link.



Target link : https://projecteuler.net/archives



Task :

In a target link, there is many tr elements. 

Each tr element has 3 td elements. 

The first td element is the number of the problem. 

The second td element is the title of the problem. 

The third td element is the number of people who solved the problem.



For each tr element, we need to get the first td element and the second td element. 

Scrap element from first td element and second td element. 



Then convert the scraped element to human readable. 

___

Rewrite the code above so it will iterate to scrap from the link strating from page 1 until page 17.


https://projecteuler.net/archives;page=1

https://projecteuler.net/archives;page=2

https://projecteuler.net/archives;page=3

until

https://projecteuler.net/archives;page=17

___



I have a txt file containing the data like below


output.txt :

Problem 1
Problem 2
Problem 3
Problem 4
Problem 5
Problem 6
Problem 7



Generate a rust code that will create a folder based on the problem number that is inside the output.txt file. 

Then for each folder, create a rust file inside the folder with the rust file name same as the folder.

For example, if the folder name "Problem 1", the rust file name inside the folder will be "problem_1.rs"


and create a file inside the folder with the name of the problem number.