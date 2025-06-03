1.

```js
async function getUserData() {
  try {
    const res = await fetch("https://api.example.com/user/1");
    if (!res.ok) {
      console.log(`HTTP Error: ${res.status}`);
    }
    let data = res.json();
    console.log(data);
  } catch (err) {
    console.log(" Error fetching user data:", err.message);
  }
}

getUserData();
```

2.

```js
console.time("fetch-data");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.timeEnd("fetch-data");
  })
  .catch((error) => {
    console.error("Error:", error);
    console.timeEnd("fetch-data");
  });

3.  Strategy: Use Chunked Uploads + Retry Logic + Progress Feedback

a. Split Files Into Chunks (≤5MB)
Why?
Big files get broken into smaller parts that the server can accept (each under 5MB). Like sending a file in pieces instead of one big blob.
b. Upload Chunks One-by-One (or Parallel w/ Retry)
Why?
If one chunk fails due to network problems, you retry just that chunk.

c. 3. Give Real-Time Feedback (Progress Bar)
Why?
UX must stay even with slow internet. Show progress clearly so users don’t feel lost.

d. Optional: Resume Uploads Later
Add a feature to resume if the upload was interrupted:

Store what chunks have already been uploaded (session/token)

Skip them next time

4. Retry a task up to 5 times using fixed delay.
   If it keeps failing, show an error.
   steps:
   Set maxRetries = 5

Create a while loop

Inside it, try to do the task

If it fails, catch the error:

Increase attempt count

If attempt > maxRetries, throw error

Else, wait (await delay()), and try again



5.
```

| Feature                       | **Service Worker**                                                 | **Normal Browser Operations**                                       |
| ----------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------- |
| **Thread**                    | Runs in a **background thread**                                    | Runs on the **main thread** (UI thread)                             |
| **Lifespan**                  | Short-lived (starts, does work, stops)                             | Lives as long as the tab is open                                    |
| **Network Control**           | Can **intercept & modify** requests via `fetch` events             | Automatically fetches from network unless cached by browser         |
| **Offline Support**           | Handles custom caching with **Cache API** (offline-first strategy) | Default behavior; page won't work without internet unless preloaded |
| **Push Notifications**        | Can receive push events even when the site is closed               | No push unless the tab is open and active                           |
| **Access to DOM**             | ❌ NO access to DOM directly                                       | ✅ Can read/write to the DOM                                        |
| **Runs When Page is Closed?** | ✅ Yes, for certain events like push or sync                       | ❌ No, stops when page closes                                       |
| **Events Handled**            | `install`, `activate`, `fetch`, `sync`, `push`                     | Typical user events like click, submit, load                        |
