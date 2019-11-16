number= int(raw_input("enter the number"))
i = 2
while i<number:
    if number%i == 0:
        print number,"is not prime number"
        break
    i = i+1
else:
    print number,"is prime number"