Remove-Item "../../server/src/html/*"-Recurse
Copy-Item "./build/*" -Destination "../../server/src/html/" -Recurse -force