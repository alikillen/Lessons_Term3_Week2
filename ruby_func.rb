def my_func
  puts "hello"
end

# in JS:
# function myFunc(){
#   console.log("hello")
# }
#myFunc();

[1,2,3].map do |x|
  x * x
end

# in JS:

# [1,2,3].map(function(x){return x*x}
# in JS we can assign this whole thing to a var but in ruby we cannot

# let square = function(x){
#   return x * x
# }
# # we defined the function here

# [1,2,3].map(square)
# # and parsed it to the map here 
# # so declaring funcs as vars (using anon functions) helps save you time etc

# Be careful using var/variables, easy confusion, according to the ecmascript standard, 
# the word we normally want to use is identifier (a name for a thing, not necessarily a let or a const or a var etc)
