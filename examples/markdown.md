# Example of Markdown

This is a paragraph.

Another paragraph. Text can be *Italic*, **bold**, or `monospace`. 

## Lists

Here is a list:
 - first
 - second
 - third

Now another list, this time numbered:
 1. first
 2. second
 3. third

## Links

It is possible to reference [a website](http://example.com).
We can also define a footnote [^1].

[^1]: This is my footnote text.

## Quoted text

I will quote a text:

> Hello!
> This text is inside the quote
>
> We can make paragraphs inside 
> the quote text.

## Code sample

We can make code sample starting text after the 4th column:

    # Comment of the code
    for (i=0; i<=10; i++) { calc(i); }

It is also possible to create code sample like this:
```
fn main() {
    println!("Hello World!");
}
```

Or like this:
~~~
function(a, b) {
    return a + b ^ 2
}
~~~

And finally, we can define the language of the code:

~~~python
import pandas as pd

# Define function
def calc(a, b):
    return a + b ** 2

# Run
for i in range(10):
    print(calc(3, i))
~~~

## Math Equations

We can define inline math equations like this: $\beta = x\alpha$. 
And we can also put them in a separate line:

$$x = \frac{a \cdot b}{c}$$

## Tables

We can define a table:

| Language | Description  |
| -------- | ------------ |
| Python   | General use. |
| R        | Good for data analysis. |
| Rust     | Good for efficiency and memory safety. |

Align columns to the right:

| Language | Description  |
| --------:| ------------:|
| Python   | General use. |
| R        | Good for data analysis. |
| Rust     | Good for efficiency and memory safety. |


Define an H1 header with marks bellow
=====================================

Ok.

Define an H2 header with marks bellow
-------------------------------------

Fine.

