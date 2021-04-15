


///////////////////////////////////
//GET DATA FROM GOOGLE SHEETS
//////////////////////////////////
$.ajax("https://spreadsheets.google.com/feeds/list/1o8csOi1mPTHanpVcBPrFC2RY8TNkmT4uDr35A-CZnSs/1/public/full?alt=json")

//.then for when the data when arrives run this function
.then((data) => {
    console.log(data)
    //Map over the data, generate simpler data
    const projects = data.feed.entry.map((item) => {
        return{
            description: item.gsx$description.$t, 
            gitURL: item.gsx$giturl.$t,
            liveURL: item.gsx$liveurl.$t,
            image: item.gsx$image.$t, 
            project: item.gsx$project.$t,
        }
    })
    console.log(projects)
})

const final = projects.map((project) => {
    return `
    <my-card name=${project.name} git=${project.git} live=${project.live} img=${project.img}></my-card>
    `
})
 console.log(final)
const $section =$("section")
$section.html(final.join(""))
 /////////////////////////////////////////////////
    // jQuery to render your projects below
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    ////////////////////////////////////////////////
//.catch in case of an error
.catch((error) => {
    console.error(error)
})

