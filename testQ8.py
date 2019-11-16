num = int(input("Enter a number: "))
sum = 0
i = num
while i > 0:
   modulas = i % 10
   sum = modulas ** 3+sum
   i = i/10
if num == sum:
   print(num,"is an Armstrong number")
else:
   print(num,"is not an Armstrong number")