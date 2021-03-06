The client-side portion of the MFC hello demo. Note that this demo can
be used with the MFC server, or any of the other hello servers (for 
example, the one contained in demo/Ice/hello).

To run the demo, first start the server:

     cd server
     server

Then start the client:

      cd client
      client

To test timeouts, use the "Timeout" slider to set a timeout on the
client proxy and the "Delay" slider to force the server to delay its
response long enough to trigger the timeout in the client. You will
notice that the server prints two "Hello World!" messages. These
occur because the Slice operation sayHello is marked as idempotent,
which allows the Ice run time to retry the operation in the case of a
timeout failure. See the Ice manual for more information about retry
behavior.
