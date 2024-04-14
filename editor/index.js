console.log("Hello World!");

// the possible vendor/product IDs for the Arduboy
const filters = [
    { vendorId: 0x2341, productId: 0x8036 }
];

document.getElementById("connect").addEventListener("click", connect);

async function connect() {
    const device = await navigator.usb.requestDevice({ filters });
    console.log(device)
    await device.open();
    await device.claimInterface(1);
    console.log("connected to:", device);
}