<script lang ="ts">
    const currentTime = new Date()
    const currentHour = currentTime.getHours()

    let greetings = ""

    if(currentHour < 12){
        greetings = "Good Morning"
    }else if (currentHour < 18) {
        greetings = "Good Evening"
    }else{
        greetings = "Good Night"
    }
</script>

<h1 class="text-3xl font-bold">
    {greetings}
</h1>