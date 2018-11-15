const shape = [4, 2]; 

/** Tensors are immutable - once you set them, they cannot be changed */
const data = tf.tensor([[4,6], [5, 9], [13, 25], [1, 57]]); 
const dataConstruct = tf.tensor([4,6,5,9,13,25,1,57], shape); 

/** However variables do change */
const dataVar = tf.variable(tf.zeros([8])); // create 8 zeros 

data.print(); 
dataConstruct.print(); 
dataVar.print(); 

// Assign 1 tensor of 1 dimension - new values must match shape
dataVar.assign(tf.tensor1d([4, 12, 5, 6, 56, 3, 45, 8])); 
dataVar.print(); 