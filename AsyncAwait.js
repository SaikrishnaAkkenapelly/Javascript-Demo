function pingFileServer()
{
    return new Promise((onPingSuccess,onPingFailure)=>
    {
        //assume this is the time take to get response back
        let count = 1;
        while(count < 10000000000)
        {
            count++;
        }

        if(count == 1000000000)
        {
            console.log("Server up and running.."); //1
            onPingSuccess();
        }
        else
        {
            onPingFailure();
        }
    });
}

function upload()
{
    return new Promise((success,failure)=>
    {
        console.log("uploading file"); //4
        //assume this is the time take to upload file
        let count = 1;
        while(count < 10000000000)
        {
            count++;
        }

        if(Math.floor(Math.random() * 10) % 2 == 0)
        {
            failure();
        }
        else
        {
            failure();
        }
    });
}

async function uploadFile()
{
    try
    {
        let pingPromise = await pingFileServer();
        Promise.resolve()
        .then(upload)
        .then(()=>{console.log("file uploaded successfully");/* 5 */})
        .catch(()=>{console.log("file failed to upload");/* 5 */});
    }
    catch(error)
    {
        console.error("error in async function"); //6
    }
    finally
    {
        console.log("cleaning up.."); //3
    }
}

uploadFile();
console.log("Hello world.."); //2