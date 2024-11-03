# Configure your GitHub Copilot Extension

## Create a GitHub app

Head to your settings page on GitHub, and at the bottom, to the left, click on the Developer Settings link. This will bring you to your GitHub apps. (You can also directly navigate to your GitHub apps page at https://github.com/settings/apps.) Configure the following:

### General Settings

1. Enter a **GitHub App name**, e.g. my-copilot-extension
2. Enter a URL for the homepage. This can be the same as the test URL for now.
3. Set the **Callback URL** (currently required). This can be the same as the test URL for now. 
<!-- ***** If this is indicated in the first part of the article, how best to reference it here? ***** --> 
Even if you're not using OAuth you still need to put a URL here. I'm told in future this may no longer be required.

<!-- screenshot of General Settings -->

4. Disable webhooks if they're enabled.

<!-- screenshot of disabling webhooks checkbox -->

5. Make sure the app is initially accessible only to you. Later, when you're ready to make your GitHub Copilot extension publicly available, you can enable it for everyone.

<!-- Permissions screenshot -->

6. Click the **Create GitHub App** button to create the GitHub app.

### Permissions & Events Settings

Next, you need to configure permissions. You only need to provide the bare minimum permissions for a Copilot extension to work.

<!-- Permissions and events screenshot -->

1. Expand the **Account permissions** section and set the Copilot Chat permission to *Read-only*. The default is *No access*.

<!-- screenshot of expanded account permissions -->

2. Click **Save changes**. Don't be alarmed by the *Are you sure you want to update permissions?* message.

<!-- screenshot of warning message -->

### Copilot Settings

1. Set the **App Type** to *Agent*. It's set to *Disabled* by default.
2. Set the URL to the root of the public URL you exposed via tunneling/port forwarding.
<!-- ***** this refers to steps in the first part of the article, which have been omitted ***** -->

<!-- screenshot of GitHub App's Copilot settings section -->

3. Click **Save**.

Congratulations! You've configured your first Copilot extension!

## Install Your Copilot Extension

Before you can use the extension, it has to be installed.

1. Navigate to your **[GitHub apps]((https://github.com/settings/apps)** in your developer settings.

<!-- screenshot, The GitHub apps section of GitHub developer settings -->

2. Click the **Edit** button to edit the app.

3. Go to the **Install App** section of the GitHub Apps' settings.

<!-- screenshot, GitHub App's Install App settings panel -->

4. Click the **Install** button to install the application.

You're brought to an intermediary page to confirm the installation of the GitHub app. Click the **Install** button.

<!-- screenshot, GitHub app installation confirmation step -->

Your Copilot extension is installed for your GitHub account.

<!-- screenshot, Post GitHub app installation screen showing the app installed -->

## Test Your Copilot Extension

You can test your Copilot extension in a few environments:

1. GitHub's Copilot chat
2. [VS Code's Copilot Chat](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.VSGitHubCopilot)
3. [Visual Studio's Copilot Chat](https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-chat?view=vs-2022)

For these environments, follow these steps:

1. In the GitHub Copilot chat, type "@" to see available extensions.

2. Your extension should appear as, e.g. "@my-copilot-extension".

<!-- screenshot, Copilot chat on GitHub.com displaying the available Copilot extensions -->

<!-- screenshot, Copilot chat in Visual Studio Code displaying the available Copilot extensions -->

3. Select your extension and ask a question or perform an operation.

4. The Copilot extension will return a response of "Welcome *your_github_username*! It looks like you asked the following question: *your_question*. This is a GitHub Copilot extension template, so it's up to you to decide what you want to implement to answer prompts."

<!-- screenshot Copilot chat responding,  -->

It won't respond to your specific question, as that functionality has not been implemented. This is where you can explore the preview SDK or integrate with a third-party service to provide more meaningful responses.

<!-- ***** Is this to be included as well? *****


## A Real World Example

...

## Grab the template

...

## Take a deep dive into Copilot extensions and the preview SDK

...

## Wrapping Up?

... 

-->