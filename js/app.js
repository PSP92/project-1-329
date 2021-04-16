


///////////////////////////////////
//GET DATA FROM GOOGLE SHEETS
//////////////////////////////////
$.ajax("https://spreadsheets.google.com/feeds/list/1n0dTA2P-SOkQh1locz5_FyPFAG33eZ94umVx--7oRz0/1/public/full?alt=json")

//.then for when the data when arrives run this function
.then((data) => {

    //Map over the data, generate simpler data
    const projects = data.feed.entry.map((item) => {
        return {
           name: item.gsx$name.$t,
            git: item.gsx$git.$t,
            live: item.gsx$live.$t,
            img: item.gsx$img.$t, 
  
        }
    })
    


const final = projects.map((project) => {
    return `
    <my-card name=${project.name} git=${project.git} live=${project.live} img=${project.img}></my-card>
    `
})

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


    // HAMBOOGIE MENU

    const $hambo = $("#hambo")
    const $bar = $("#bar"); {
    let $bar = bar
    }
    $hambo.on("click",(event) => {
        if ($bar.css("display") === "flex"){
            $bar.css("display", "none")
        } else {
            $bar.css("display", "flex")
        }
          
        })