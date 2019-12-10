'use strict';

const auth = () => {
  const vendorId = 0x05ac; // ここにVendor ID
  const productId = 0x12a8; // ここにProduct ID
  const serialNumber = '00008030001E24163E80802E'; // ここにSerial Number
  navigator.usb.requestDevice({ 'filters': [
      { 'vendorId': vendorId, 'productId': productId }
    ]
  }).then(device => {
    if (device.serialNumber === serialNumber) {
      console.log('success!');
      login();
      return device.open;
    } else {
      console.log('false!');
      alert('認証に失敗しました');
    }
  }).catch(error => {
    console.log(error);
  });
}
