Sample Matchmaker
================

A server app built to be deployed with node.js server based on Kettle that
matches solution records to user needs and preferences.

Sample Matchmaker operates by executing [Kettle](http://wiki.fluidproject.org/display/fluid/Kettle).

### Dependencies

[universal](https://github.com/GPII/universal)

Installation instructions:
-

Firstly, install node and npm.

Run the following command in your newly checked out sample Matchmaker
repository. This will install all dependencies that are required by sample
Matchmaker.

    npm install

### Sample Matchmaker API

Sample Matchmaker currently supports the following urls:

    {url_to_a_sample_matchmaker_server}/match // POST

To run sample matchmaker, simply type:

    [NODE_ENV={environment}] bin/sampleMatchMaker [path/to/sampleMatchMaker/configs/folder]

- Default environment is development.
- Path to configs folder can be absolute or relative to the current user directory.

For example:

    bin/sampleMatchMaker
    bin/sampleMatchMaker /Users/{userName}/sampleMatchMaker/configs/
    NODE_ENV=production bin/sampleMatchMaker configs/
