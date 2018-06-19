Mavo.Plugins.register("router", {
    hooks: {
        "init-start": env => {
            console.log(env);

            this.defaultMatch = [""];

            this.initMatch = () => {
                let newMatch;

                if (location.hash && location.hash != "") {
                    newMatch = decodeURIComponent(location.hash.replace("#", "")).split("/").filter(n => n != "");
                }
                else {
                    newMatch = this.defaultMatch;
                }

                console.log(newMatch);

                document.querySelector("input[property='search']").value = newMatch[0];
            };

            window.addEventListener("hashchange", event => {
                // this.initMatch();
                location.reload();
            });

            this.initMatch();

            console.log(Mavo.getAttribute("article"));
        }
    }
});