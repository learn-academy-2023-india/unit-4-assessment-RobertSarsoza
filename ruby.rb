# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
    attr_accessor :wheels, :current_speed
  attr_reader :model

  def initialize(model)
    @model = model
    @wheels = 2
    @current_speed = 0
  end

  def pedal_faster(speed_increase)
    @current_speed += speed_increase
  end

  def brake(speed_decrease)
    @current_speed = [0, @current_speed - speed_decrease].max
  end

  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end

end