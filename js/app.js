


///////////////////////////////////
//GET DATA FROM GOOGLE SHEETS
//////////////////////////////////
$.ajax("https://spreadsheets.google.com/feeds/list/1n0dTA2P-SOkQh1locz5_FyPFAG33eZ94umVx--7oRz0/1/public/full?alt=json")

//.then for when the data when arrives run this function
.then((data) => {
    console.log(data)
    //Map over the data, generate simpler data
    const projects = data.feed.entry.map((item) => {
        return {
           name: item.gsx$name.$t,
            git: item.gsx$git.$t,
            live: item.gsx$live.$t,
            img: item.gsx$img.$t, 
  
        }
    })
    

console.log(projects)
const final = projects.map((project) => {
    return `
    <my-card name=${project.name} git=${project.git} live=${project.live} img=${project.img}></my-card>
    `
})
 console.log(final)
const $section =$("section")
$section.html(final.join(""))
})

 /////////////////////////////////////////////////
    // jQuery to render your projects below
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    ////////////////////////////////////////////////

    .catch((error) => {
        console.log(error);
    })