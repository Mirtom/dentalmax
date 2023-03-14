import privateInstance from '../privateInstance';

export const getOrderList = async params => {
  let response = await privateInstance.get('orders', {params});
  return response.data;
};
