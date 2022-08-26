function search()
{
    var arr = ["2 Hearts","Black Widow","Breaking Bad","Charlie And The Chocolate Factory","Cinderella","Dark","Enola Holmes","Fear Street 1666","Fear Street 1978","Fear Street 1994","Friends","Godzilla vs Kong","The Healing Powers of Dude","In The Tall Grass","La La Land","Loki","Lost In Space","Luca","Lucifer","Money Heist","Never Have I Ever","The Queens Gambit","Sex Education","Sherlock","Squid Game","Stranger Things","Sweet Tooth","The Crown","The Good Doctor","The Kissing Booth","The Kissing Booth 2","The Kissing Booth 3","The Office","The Smurfs","The Tomorrow War","To All the Boys I’ve Loved Before","To All the Boys 2: P.S. I Still Love You","To All the Boys 3: Always and Forever","Tom & Jerry","The Vampire Diaries","What If"];
    var i;
    var arr2 = ["../html/2_hearts.html","../html/black_widow.html","../html/breaking_bad.html","../html/chocolate_factory.html","../html/cinderella.html","../html/dark.html","../html/enola_holmes.html","../html/fear_street_1666.html","../html/fear_street_1978.html","../html/fear_street_1994.html","../html/friends.html","../html/godzilla_vs_kong.html","../html/healing_power_of_dude.html","../html/in_the_tall_grass.html","../html/la_la_land.html","../html/loki.html","../html/lost_in_space.html","../html/luca.html","../html/lucifer.html","../html/money_heist.html","../html/never_have_i_ever.html","../html/queens_gambit.html","../html/sex_ed.html","../html/sherlock.html","../html/squid_game.html","../html/stranger_things.html","../html/sweet_tooth.html","../html/the_crown.html","../html/the_good_doctor.html","../html/the_kissing_booth.html","../html/the_kissing_booth2.html","../html/the_kissing_booth3.html","../html/the_office.html","../html/the_smurfs.html","../html/the_tomorrow_war.html","../html/thriller.html","../html/to_all_the_boys1.html","../html/to_all_the_boys2.html","../html/to_all_the_boys3.html","../html/tom&jerry.html","../html/vampire_diaries.html","../html/what_if.html"];
    var answer = document.getElementById("tf1").value;
    for(i=0;i<arr.length;i++)
    {
        if(answer==arr[i])
        {
            document.location='arr2[i]';
        }
    }
}


<script>
        function search()
{
    
    var arr = ["2 Hearts","Black Widow","Breaking Bad","Charlie And The Chocolate Factory","Cinderella","Dark","Enola Holmes","Fear Street 1666","Fear Street 1978","Fear Street 1994","Friends","Godzilla vs Kong","The Healing Powers of Dude","In The Tall Grass","La La Land","Loki","Lost In Space","Luca","Lucifer","Money Heist","Never Have I Ever","The Queens Gambit","Sex Education","Sherlock","Squid Game","Stranger Things","Sweet Tooth","The Crown","The Good Doctor","The Kissing Booth","The Kissing Booth 2","The Kissing Booth 3","The Office","The Smurfs","The Tomorrow War","To All the Boys I’ve Loved Before","To All the Boys 2: P.S. I Still Love You","To All the Boys 3: Always and Forever","Tom & Jerry","The Vampire Diaries","What If"];
    var i;
    var arr2 = ["html/2_hearts.html","html/black_widow.html","html/breaking_bad.html","../html/chocolate_factory.html","../html/cinderella.html","../html/dark.html","../html/enola_holmes.html","../html/fear_street_1666.html","../html/fear_street_1978.html","../html/fear_street_1994.html","../html/friends.html","../html/godzilla_vs_kong.html","../html/healing_power_of_dude.html","../html/in_the_tall_grass.html","../html/la_la_land.html","../html/loki.html","../html/lost_in_space.html","../html/luca.html","../html/lucifer.html","../html/money_heist.html","../html/never_have_i_ever.html","../html/queens_gambit.html","../html/sex_ed.html","../html/sherlock.html","../html/squid_game.html","../html/stranger_things.html","../html/sweet_tooth.html","../html/the_crown.html","../html/the_good_doctor.html","../html/the_kissing_booth.html","../html/the_kissing_booth2.html","../html/the_kissing_booth3.html","../html/the_office.html","../html/the_smurfs.html","../html/the_tomorrow_war.html","../html/thriller.html","../html/to_all_the_boys1.html","../html/to_all_the_boys2.html","../html/to_all_the_boys3.html","../html/tom&jerry.html","../html/vampire_diaries.html","../html/what_if.html"];
    var answer = document.getElementById("tf1").value;
    
    for(i=0;i<arr.length;i++)
    {
        if(answer==arr[i])
        {
            document.location=arr2[i];
            break;
        }
    }
    
}

    </script>