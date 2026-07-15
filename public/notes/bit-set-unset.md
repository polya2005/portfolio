# A Nice Branchless Bit Set/Unset Trick

## Introduction

Setting and unsetting a single bit is a common operation in low-level programming, especially in embedded systems. For example, you might want to set a specific bit in a GPIO register to turn on an LED, or unset a bit to turn it off. Sometimes, you want to set the bit if a condition is true, and unset it if the condition is false. This can be done in a branchless way using bitwise operations.

## Traditional Approach

Suppose you have an integer variable `x`. Setting the `n`-th bit is typically done using the bitwise OR operator:

```c
x |= (1 << n);
```

And unsetting the `n`-th bit is done using the bitwise AND operator with the one's complement of the bit mask:

```c
x &= ~(1 << n);
```

If we instead want to set the bit if a condition `cond` is true, and unset it if `cond` is false, we might write:

```c
void set_bit_if_true(int *x, int n, bool cond) {
    if (cond) {
        *x |= (1 << n);  // Set the bit
    } else {
        *x &= ~(1 << n); // Unset the bit
    }
}
```

## The Trick

There is a more efficient way to achieve this without using branches. Notice that unsetting a bit in `x` is equivalent to setting the corresponding bit in `~x`. Therefore, our function can be rewritten as:

```c
void set_bit_if_true(int *x, int n, bool cond) {
    if (cond) {
        *x |= (1 << n);  // Set the bit
    } else {
        *x = ~(*x);
        *x |= (1 << n);  // Set the bit in ~x
        *x = ~(*x);      // Invert back to get the original x with the bit unset
    }
}
```

This does not seem like an improvement, but notice that the statements inside the `if` and `else` blocks are pretty similar. In fact, we can even make it _almost the same_ using the XOR operator:

```c
void set_bit_if_true(int *x, int n, bool cond) {
    if (cond) {
        *x ^= 0;
        *x |= (1 << n);  // Set the bit
        *x ^= 0;
    } else {
        *x ^= -1;        // -1 is all ones in two's complement, so this inverts all bits
        *x |= (1 << n);  // Set the bit in ~x
        *x ^= -1;
    }
}
```

Now, we can use the fact that `cond` is either 0 or 1 to simplify this further:

```c
void set_bit_if_true(int *x, int n, bool cond) {
    *x ^= -cond;        // Invert all bits if cond is true
    *x |= (1 << n);     // Set the bit
    *x ^= -cond;        // Invert back if cond is true
}
```

Voila! We have a branchless function that sets or unsets a bit based on a condition.

## FAQs
> **Q: So, did you invent this trick?**

A: Not really. While I did come up with this trick independently working on a lab, I am sure that it has been discovered before and wouldn't be surprised if it is commonly used in production code.

> **Q: Doesn't this function do more memory accesses?**

A: Technically yes, but the compiler is most likely to optimize this function such that there is only one read and one write to the address that `x` points to.