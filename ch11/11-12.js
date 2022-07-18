function localShippingRules(data) {
  if (data) {
    return new ShippingRules(data);
  } else {
    throw new OrderProcessingError('No shipping rules found');
  }
}

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super();
    this.errorCode = errorCode;
  }
}

try{
  const result = localShippingRules();
} catch (error) {
  if(error instanceof OrderProcessingError) {
    console.error(error);
  }
}