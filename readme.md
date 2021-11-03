# Shell-component demo
The purpose of this project is to demonstrate how using a non-segment-consuming wrapper component seems to throw off the ion navigation stack and cause unexpected behavior with the ion-back-button.

## Background and problem
I am working with ionic web app and need to differentiate the navigation between web-desktop and web-mobile, while having a neutral url that can be shared to other users regardless whether their recipients are using web or mobile.

# Steps to verify
1. Run the app.
2. Navigate from root to Feature A. Notice that the back button is missing.
3. Continue navigation to the list page. Notice back button appearing. (now there is something in the history to go back to)
4. Navigate from the list to the detail page inside Feature B. Notice the missing back button. (history has been cleared?) Notice that the browser's back button works correctly.

# Isolating the cause
In the router-modules of FeatureA and FeatureB, comment out the lines which reference/apply the shell component (where the the diffrenentiation between web-mobile vs web-desktop is done)

The back button works as expected.abs

# Question
Is this behavior by design? If so, then what would be the recommended approach to this problem?
