Canopy Matchmaker
================

A server app built to be deployed with node.js server based on Kettle that
matches solution records to user needs and preferences.

Canopy Matchmaker dynamically determines the appropriate solutions to a user's
needs by employing a fast and simple algorithm that measures fitness of a
match based on weighting the proximity of solutions within a pluggable
ontology.

Canopy Matchmaker operates by executing [Kettle](http://wiki.fluidproject.org/display/fluid/Kettle).

### Dependencies

[universal](https://github.com/GPII/universal)

Installation instructions:
-

Firstly, install node and npm.

Run the following command in your newly checked out Canopy Matchmaker
repository. This will install all dependencies that are required by Canopy
Matchmaker.

    npm install

### Canopy Matchmaker API

Canopy Matchmaker currently supports the following urls:

    {url_to_a_canopy_matchmaker_server}/match // POST

To run canopy matchmaker, simply type:

    [NODE_ENV={environment}] bin/canopyMatchMaker [path/to/canopyMatchMaker/configs/folder]

- Default environment is development.
- Path to configs folder can be absolute or relative to the current user directory.

For example:

    bin/canopyMatchMaker
    bin/canopyMatchMaker /Users/{userName}/canopyMatchMaker/configs/
    NODE_ENV=production bin/canopyMatchMaker configs/
