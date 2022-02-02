Promise.resolve().then(upload)
.then(()=>{console.log("file uploaded successfully");/* 4 */})
.catch(()=>{console.log("file failed to upload");/* 4 */});

console.log("Hello world.."); //2

function upload()
{
    return new Promise((success,failure)=>
    {
        console.log("uploading file"); //3
        //assume this is the time take to upload file
        let count = 1;
        while(count < 10000000000)
        {
            count++;
        }

        if(Math.floor(Math.random() * 10) % 2 == 0)
        {
            success();
        }
        else
        {
            failure();
        }
    });
}