Tatiana Bimatova

1) It makes sense to fit the automated tests within a Github action that runs whenever code is pushed.
This ensures that all project's contributors code comply with the same set of rules and
also makes developement faster in the long run. 

2) No. End to end tesing is more suitable for emulating user actions, not the internal work of the
functions.

3) It is probably not a good idea to try to test "message" feature with unit test, because it is hard or
even impossible to isolate. Integration testing is more appropriate here.

4) Yes, this feature can be easily isolated and tested with a unit test.
