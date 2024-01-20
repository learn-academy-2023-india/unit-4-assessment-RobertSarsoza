# UNIT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Compare and contrast JavaScript and Ruby. What are three things they have in common and what are three differences?

Your answer:
Similarities

1. They are both are OOP
2. 
3. 

Differences
Ruby isnt as picky with santax 

1. 
2. 
3. 


Researched answer:
Similarities

1.  Both JavaScript and Ruby are object-oriented programming languages. They support the principles of encapsulation, inheritance, and polymorphism, allowing developers to structure code using objects and classes.
2. Both languages are dynamically typed, meaning that variable types are determined at runtime. This provides flexibility but requires careful handling to avoid runtime errors related to type mismatches.
3. JavaScript and Ruby both use automatic garbage collection. This means that developers don't need to manually manage memory allocation and deallocation, making it easier to write code without memory leaks.

Differences

1. One of the most apparent differences is syntax. JavaScript has C-style syntax, influenced by languages like C and Java, making it familiar to developers with experience in those languages. Ruby, on the other hand, has a more natural language-like syntax, prioritizing readability and ease of use.
javascript- 
variable declaration
            var x = 10;
            let y = 'Hello';
            const z = true;
Conditional Statements
            if (condition) {
            } else if (anotherCondition) {
            } else {
            }
Function/Method Definition
            function add(a, b) {
            return a + b;
            }
Array Declaration
            var array = [1, 2, 3];
Looping
            for (let i = 0; i < 5; i++) {
            }
Object/Hash Declaration
            var person = { name: 'John', age: 25 };



ruby-       
variable declaration
            x = 10
            y = 'Hello'
            z = true
Conditional Statements
            if condition
            elsif another_condition
            else
            end
Function/Method Definition
            def add(a, b)
            a + b
            end
Array Declaration
            array = [1, 2, 3]
Looping
            5.times do |i|
            end
Object/Hash Declaration
            person = { name: 'John', age: 25 }

2. JavaScript is primarily used as a client-side scripting language in web browsers. It allows for dynamic content updates and interactivity on the client side. Ruby, however, is often used on the server side, powering web applications through frameworks like Ruby on Rails.
3. JavaScript is designed to be single-threaded with asynchronous features, utilizing mechanisms like callbacks, promises, and async/await for handling concurrency. Ruby, by default, follows a multi-threaded approach, where multiple threads can run concurrently. However, it's important to note that Ruby's global interpreter lock (GIL) can limit true parallelism.


2. What does it mean to implement a TDD workflow?

Your answer:

Researched answer:

Implementing a Test-Driven Development (TDD) workflow is a software development approach where tests are written before the actual code is implemented. The process typically follows these steps:

Write a Test:

Start by writing a test that defines a function or improvement of a function, which should fail initially because the function is not implemented yet. These tests are often written in a testing framework  (Jest / RSpec)
Run the Test:

Run the test to confirm that it fails, as expected. This verifies that the test is correctly checking for the desired functionality.

Write the Code:

Implement the minimum amount of code necessary to make the test pass. This means creating the function or feature that the test is checking.

Run All Tests/run again:

Run all tests, including the newly added one. If any test fails, make the necessary adjustments to the code to address the issues.

Refactor((improve)) (Optional):

After the tests pass, you can refactor the code to improve its structure, readability, or performance. The tests act as a safety net, ensuring that the behavior of the code doesn't change unintentionally.

Repeat:

Repeat the process for the next piece of functionality. Write a new test, run it (and all existing tests), write the code, and refactor if needed.

Benefits of implementing a TDD workflow include:

Early Detection of Issues: TDD helps catch bugs and design issues early in the development process since tests are written before the code.

Improved Code Quality: The process encourages modular and maintainable code, as developers need to think about the design and structure before writing the actual code.

Regression Testing: The suite of tests created during TDD serves as a form of regression testing, ensuring that existing functionality isn't broken by new changes.

Increased Confidence: Having a comprehensive suite of passing tests gives developers confidence that their changes haven't introduced errors.

Facilitates Collaboration: Tests serve as documentation for the expected behavior of the code, making it easier for team members to understand and collaborate on the project.

Implementing a TDD workflow requires discipline and a shift in mindset, but it can lead to more robust and maintainable software in the long run.

3. What is a block in Ruby?

Your answer:
a block is like an object and method combined 

Researched answer:
In Ruby, a block is a piece of code that can be passed to a method like an argument. It is a way to group statements and is often associated with iterators, closures, and certain method invocations. Blocks are defined using either the do...end keywords or curly braces {}.

5.times do
  puts "This is a block iteration"
end

5.times { puts "This is a block iteration" }

In this example, times is a method provided by the Integer class, and it takes a block as an argument. The block contains the code that will be executed repeatedly for the specified number of times (in this case, 5).

Blocks can also accept parameters, allowing you to pass data into the block.

[1, 2, 3, 4, 5].each do |number|
  puts "Current number is: #{number}"
end

In this example, the each method is called on an array, and the block takes a parameter number that represents each element in the array during iteration.

Blocks are a fundamental part of Ruby's syntax and are widely used for creating concise and expressive code, especially in the context of iterators, callbacks, and custom methods.

4. STRETCH: What is a version manager?

Answer:
my answer : like git or ruby it controls the code being used 

researched answer
A version manager is a tool that helps developers manage different versions of software dependencies on their development machines. It allows for the installation, switching, and management of multiple versions of programming languages, frameworks, libraries, and other tools. The primary purpose of a version manager is to facilitate the development of projects that may require specific versions of software components.

One common use case for version managers is managing different versions of programming languages. For example:

Using a version manager helps developers avoid conflicts between projects that may require different versions of the same software. It also streamlines the process of setting up development environments, making it easier to switch between projects with varying requirements.

These tools typically work by providing a command-line interface to install, manage, and switch between different versions. They may also integrate with project configuration files (e.g., .ruby-version, .nvmrc) to automatically select the appropriate version when entering a project directory.

Overall, version managers are valuable tools for maintaining a clean and organized development environment, especially in environments where projects may have diverse dependencies

Version managers, on the other hand, are tools designed to manage different versions of software components, such as programming languages, libraries, or frameworks, on a developer's machine.
Examples include Ruby Version Manager (RVM) for Ruby, Node Version Manager (NVM) for Node.js, and pyenv for Python.
Version managers allow developers to easily switch between different versions of a programming language or library based on the requirements of a specific project.
Their primary purpose is to handle the installation, management, and isolation of different versions of software dependencies.

(Git is not a version manager in the traditional sense; instead, it is a distributed version control system (VCS). While the term "version control" is related, there are key differences between version control systems and version managers.Git is a version control system focused on tracking and managing changes to source code in a collaborative environment. It is not a version manager for managing different versions of programming languages or tools on a developer's machine. Developers often use both Git for version control and version managers for handling software dependencies in their development workflows.)

## Looking Ahead: Terms for Next Unit

Research and define the following terms.

1. Database migrations:
Definition: Database migrations refer to a technique used in software development to manage changes to a database schema over time. They are scripts or code files that define changes to the database structure, such as creating or modifying tables, adding or removing columns, and establishing relationships between tables. Migrations provide a systematic way to version control database changes, ensuring that all developers working on a project can apply the same changes to their local databases and that production databases can be updated in a consistent and controlled manner.
2. Model validations:
Definition: Model validations are rules or conditions applied to the data within a software application's data models. In the context of web development and frameworks like Ruby on Rails, models represent the structure and behavior of data entities. Validations help ensure that the data stored in these models meets specific criteria or constraints before being persisted to the database. Common validations include checking for the presence of required fields, enforcing uniqueness, validating format (e.g., email addresses), and setting numerical ranges. By implementing model validations, developers can maintain data integrity and improve the overall quality of the application.
3. Params:
Definition: "Params" is short for parameters and is commonly used in the context of web development to refer to data that is sent from a client (e.g., a web browser) to a server as part of an HTTP request. Parameters can be included in various parts of a request, such as the URL, query string, headers, or the request body. In the context of server-side code (e.g., in Ruby on Rails), the term "params" typically refers to the parameters extracted from the request, often containing form data submitted by a user. Developers use these parameters to access user inputs and make decisions based on the information provided in the HTTP request.