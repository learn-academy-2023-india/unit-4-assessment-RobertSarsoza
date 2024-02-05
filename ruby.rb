# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach
# I did not understand the directions unfortunately and chatgpt did all of this code. some of the comments are my own some are explained by chatgpt
class Bike
    # creates a class
    attr_accessor :wheels, :current_speed
    # creates a setter and getter method
  attr_reader :model
    # creates a getter method 

  def initialize(model)
    # sets model attribute to the class bike
    @model = model
    @wheels = 2
    @current_speed = 0
  end

  def pedal_faster(speed_increase)
    @current_speed += speed_increase
  end
# means the bike's current speed will increase by the amount you want it to go faster.
  def brake(speed_decrease)
    @current_speed = [0, @current_speed - speed_decrease].max
  end
#    means the bike's current speed will decrease by the amount you want it to go slower.
# sets the speed won't go below zero or negative.

  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end
# putting it all together using the models and attributes
end

