function pingFileServer()
{
    //assume this is the time take to get response back
    let count = 1;
    while(count < 1000000000)
    {
        count++;
    }
    console.log("Server up and running..");
    return true;
}

function upload(file)
{
    console.log("uploading this file:" + file);
    //assume this is the time take to upload file
    let count = 1;
    while(count < 10000000000)
    {
        count++;
    }

    if(Math.floor(Math.random() * 10) % 2 == 0)
        console.log("file uploaded successfully");
    else
        console.log("file failed to upload");
}

if(pingFileServer())
    upload("opt/SupplierExchange/notes.txt");

console.log("Hello world..");