---
title: 'Automatically starting Windows Terminal as administrator in Quake mode'
pubDate: 2023-11-30
description: '“Admin motto: I may not always know what I’m doing, but I’m doing it with confidence.”'
author: 'Wanrick'
image:
   url: '/src/blog/images/futuristic-terminal.jpg'
   alt: 'Cover image for the post'
tags: ["windows", "terminal", "admin", "windows-terminal"]
---

I've loved the Quake-style console since I was a kid. I've never played Quake (I know, I know), but I've used a similar
console in games to "tweak the rules" (read: cheat big-time). From the original Counter-Strike through to Skyrim,
the drop-in console always made me feel powerful.

In 2021 Microsoft introduced Quake mode for Windows Terminal. Using the shortcut Win+` while any terminal window is
active,
or launching Windows Terminal from a command line with the _quake window parameter will let Terminal fill the top half of the screen in a borderless window. Awesome, right?

```shell
wt -w _quake
```

Now, I also grew up as a reckless Windows user. My first PC was frequently "in the shop" because I would fiddle with things
I didn't understand, something tragic would happen i.e. I'd remove the boot partition or delete dll-files from System32
to
free up space on my HDD. (I was learning the hard way.) As such, I prefer to run Terminal as administrator. (IDDQD
amirite?) Often I find
myself switching between my user instance and an admin instance of Terminal when installing apps or changing dev
settings or whatnot.

For a while now, I've been waiting for the correct combination of settings to come to Windows Terminal so that I can run
Windows Terminal as an administrator, in "quake mode" on system start-up.

At the time of writing, this has not yet happened so I decided "No [more] lollygaggin!"

I finally managed to achieve what I wanted by combining a batch script with a scheduled task. Quite simple.

1. Open Windows Task Scheduler andCreate a Task
2. On "General" tab -> give it a name and check the box for "Run with highest privileges"
3. On "Triggers" tab -> Create new and in the "Begin the task:" dropdown, select "At startup"
4. On "Actions" tab -> Create new and leave the "Action:" dropdown on "Start a program"
5. Fill the path to Windows Terminal in "Program/script:". For me this was at "
   %LocalAppData%\Microsoft\WindowsApps\wt.exe"
6. Fill the arguments for quake mode in "Add arguments (optional):"

```shell
-w _quake
```

7. On the "Conditions" tab, uncheck "Start the task only if the computer is on AC power", and
8. On the "Settings" tab, check "Allow task to be run on demand" and uncheck all the rest

The beauty of this is that I always have my terminal handy, and I'm never restricted as to what I can do with it.

**DISCLAIMER:** I do NOT recommend running _any_ terminal under administrator privileges unless you know for sure what
you're doing.
Otherwise, things can go irreversibly sideways very fast.
