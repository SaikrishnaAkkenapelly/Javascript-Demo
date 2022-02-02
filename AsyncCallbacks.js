uploadFile("opt/SupplierExchange/notes.txt",upload);

console.log("Hello world.."); //2

function uploadFile(file,callback)
{
    if(pingFileServer())
    {
        //setTimeout will push the code inside to end of the event queue thus simulates async
        setTimeout(() =>
        {
            callback(file);
        }, 0);
    }
}

function pingFileServer()
{
    //assume this is the time take to get response back
    let count = 1;
    while(count < 1000000000)
    {
        count++;
    }
    console.log("Server up and running.."); //1
    return true;
}

function upload(file)
{
    console.log("uploading this file:" + file); //3
    //assume this is the time take to upload file
    let count = 1;
    while(count < 10000000000)
    {
        count++;
    }

    if(Math.floor(Math.random() * 10) % 2 == 0)
        console.log("file uploaded successfully"); //4
    else
        console.log("file failed to upload"); //4
}