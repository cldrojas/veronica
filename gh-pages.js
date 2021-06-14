var ghpages = require("gh-pages");

ghpages.publish(
    "dist", // path to public directory
    {
        branch: "gh-pages",
        repo: "https://github.com/cldrojas/veronica.git", // Update to point to your repository
        user: {
            name: "Daniel Rojas", // update to use your name
            email: "skydrancerblack@gmail.com", // Update to use your email
        },
    },
    () => {
        console.log("Deploy Complete!");
    }
);