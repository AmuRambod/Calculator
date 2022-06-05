# Calculator
This is my solution for the [Calculator project](https://www.theodinproject.com/lessons/foundations-calculator) of [The Odin Project](https://www.theodinproject.com) curriculum.

Live preview: not ready yet! ¯\\\_(ツ)_/¯

## Plans and ToDos
- ### Visual
  - [ ] Edit the *Footer*.

  - [ ] Add a different style for operation and function buttons (colors and such).

  - [ ] Add a `:hover` or `:active` class to buttons.
    - [ ] Use [this tutorial](https://www.youtube.com/watch?v=uuluAyw9AI0) for hover-states on mobile.
    - [ ] Make it responsive to keyboard input.

- ### Functional
  - [ ] Add *power*: 𝒙 <sup>𝐧</sup>

  - [ ] Add *percentage*: 𝑎 × 𝑏٪
    <br>My idea for implementing the percent is like this:
    ```js
    if(operator === "%"){
      if(operation != null){
        if (operation === add || operation === subtract){
          num2 = num1 * num2.beforePercentSign();
        }
        if (operation === multiply || operation === divide){
          num2 = num2.beforePercentSign()/100;
        }
        return; //if operation is power or ...
      }
    }
    ```
    This is just a rough idea of how i need to do it. I don't know if I have to add this to `getResult()` or `getOperator()`.

  - [ ] Add *factorial*: 𝒙!

  