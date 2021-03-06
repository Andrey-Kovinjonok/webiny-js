# webiny-file-storage-s3

AWS S3 driver for `webiny-file-storage` interface. 

## Documentation

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [About](#about)
-   [Get started](#get-started)
-   [Classes](#classes)
    -   [S3StorageDriver](#s3storagedriver)
        -   [getFile](#getfile)
        -   [setFile](#setfile)
        -   [getMeta](#getmeta)
        -   [setMeta](#setmeta)
        -   [exists](#exists)
        -   [getKeys](#getkeys)
        -   [delete](#delete)
        -   [rename](#rename)
        -   [getURL](#geturl)
        -   [getSize](#getsize)
        -   [getTimeModified](#gettimemodified)
        -   [getContentType](#getcontenttype)

### About

This is the AWS S3 driver for `webiny-file-storage`.
The driver allows you to store files to S3.


### Get started

The S3 driver takes a config object defined by `S3StorageDriverConfig` flow type.
The `S3StorageDriverConfig` takes the following parameters:

    S3StorageDriverConfig = {
        bucket: string,             /* required */
        accessKeyId: string,        /* required */
        secretAccessKey: string,    /* required */
        region: string,             /* required */
        endpoint: string,           /* required */
        createDatePrefix: boolean,
        directory: string,
        publicUrl: string
    };


### Classes




#### S3StorageDriver

[packages-utils/webiny-file-storage-s3/src/index.js:45-387](https://github.com/webiny/webiny-js/blob/aff0cc278dafb7ed515810176cad4a931c5aebb1/packages-utils/webiny-file-storage-s3/src/index.js#L45-L387 "Source code on GitHub")

S3StorageDriver class instance is the AWS S3 driver for webiny-file-storage.

**Examples**

```javascript
import S3StorageDriver from "webiny-file-storage-s3";
import type { S3StorageDriverConfig } from "webiny-file-storage-s3";

const params: S3StorageDriverConfig = {
    bucket: "TestBucket",
    accessKeyId: "AWS_AccessKeyId",
    secretAccessKey: "AWS_SecretAccessKey",
    region: "us-east-2",
    endpoint: "s3.us-east-2.amazonaws.com"
};

const s3Storage = new S3StorageDriver(S3StorageDriverConfig);
s3Storage.getFile("fileKey");
```

##### getFile

[packages-utils/webiny-file-storage-s3/src/index.js:60-72](https://github.com/webiny/webiny-js/blob/aff0cc278dafb7ed515810176cad4a931c5aebb1/packages-utils/webiny-file-storage-s3/src/index.js#L60-L72 "Source code on GitHub")

Returns the file and its content.

**Parameters**

-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** This is the file identifier under which the file is stored.
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** This is the list of additional parameters - defined by IFileStorageDriver, but not used in case of this driver.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;IFileData>** `IFileData` object.

##### setFile

[packages-utils/webiny-file-storage-s3/src/index.js:80-118](https://github.com/webiny/webiny-js/blob/aff0cc278dafb7ed515810176cad4a931c5aebb1/packages-utils/webiny-file-storage-s3/src/index.js#L80-L118 "Source code on GitHub")

Writes the given file and returns final file key.

**Parameters**

-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** This is the file identifier under which the file will be stored.
-   `file` **IFileData** This is the `IFileData` object containing the content and meta information.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** The final key under which the file is stored.

##### getMeta

[packages-utils/webiny-file-storage-s3/src/index.js:125-137](https://github.com/webiny/webiny-js/blob/aff0cc278dafb7ed515810176cad4a931c5aebb1/packages-utils/webiny-file-storage-s3/src/index.js#L125-L137 "Source code on GitHub")

Returns file meta information.

**Parameters**

-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** This is the file identifier under which the file is stored.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Object containing the file meta information.

##### setMeta

[packages-utils/webiny-file-storage-s3/src/index.js:145-153](https://github.com/webiny/webiny-js/blob/aff0cc278dafb7ed515810176cad4a931c5aebb1/packages-utils/webiny-file-storage-s3/src/index.js#L145-L153 "Source code on GitHub")

Sets file meta information. Tne new meta information is merged with the existing meta information.

**Parameters**

-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** This is the file identifier under which the file is stored.
-   `meta` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** This is the object containing the new meta information that will be added to the file.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>** Returns `true` if meta has been set successfully, otherwise `false`.

##### exists

[packages-utils/webiny-file-storage-s3/src/index.js:160-166](https://github.com/webiny/webiny-js/blob/aff0cc278dafb7ed515810176cad4a931c5aebb1/packages-utils/webiny-file-storage-s3/src/index.js#L160-L166 "Source code on GitHub")

Returns `true` if the file exists, otherwise false.

**Parameters**

-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** This is the file identifier under which the file is stored.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>** 

##### getKeys

[packages-utils/webiny-file-storage-s3/src/index.js:177-212](https://github.com/webiny/webiny-js/blob/aff0cc278dafb7ed515810176cad4a931c5aebb1/packages-utils/webiny-file-storage-s3/src/index.js#L177-L212 "Source code on GitHub")

Returns an array of all keys.
In case of S3, the `key`  parameter is used as a `Prefix` filter. Once the results matching this filter have
been retrieved a regex match with `filter` param is applied and then all matching files are returned.

**Parameters**

-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** This is the "Prefix" filter.
-   `filter` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** (Optional) Additional regex filter that will be applied

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)>** Array of file keys that match the given filters.

##### delete

[packages-utils/webiny-file-storage-s3/src/index.js:219-230](https://github.com/webiny/webiny-js/blob/aff0cc278dafb7ed515810176cad4a931c5aebb1/packages-utils/webiny-file-storage-s3/src/index.js#L219-L230 "Source code on GitHub")

Delete the file.

**Parameters**

-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** This is the file identifier under which the file is stored.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>** `true` if the file is deleted successfully, otherwise `false`.

##### rename

[packages-utils/webiny-file-storage-s3/src/index.js:238-259](https://github.com/webiny/webiny-js/blob/aff0cc278dafb7ed515810176cad4a931c5aebb1/packages-utils/webiny-file-storage-s3/src/index.js#L238-L259 "Source code on GitHub")

Rename the file.

**Parameters**

-   `sourceKey` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** This is the new file key.
-   `targetKey` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** This is the current file identifier under which the file is stored.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>** `true` if the file is renamed successfully, otherwise `false`.

##### getURL

[packages-utils/webiny-file-storage-s3/src/index.js:270-276](https://github.com/webiny/webiny-js/blob/aff0cc278dafb7ed515810176cad4a931c5aebb1/packages-utils/webiny-file-storage-s3/src/index.js#L270-L276 "Source code on GitHub")

Returns the public file url.
In case the `publicUrl` param is defined in the `S3StorageDriverConfig` the public url will return `publicUrl+key`.
In case the `publicUrl` param is not defined, the method uses the `endpoint` and `bucket` param to form the
public url.

**Parameters**

-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** This is the file identifier under which the file is stored.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Public URL.

##### getSize

[packages-utils/webiny-file-storage-s3/src/index.js:284-297](https://github.com/webiny/webiny-js/blob/aff0cc278dafb7ed515810176cad4a931c5aebb1/packages-utils/webiny-file-storage-s3/src/index.js#L284-L297 "Source code on GitHub")

Get file size in bytes.

**Parameters**

-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** This is the file identifier under which the file is stored.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>** Number of bytes.

##### getTimeModified

[packages-utils/webiny-file-storage-s3/src/index.js:305-316](https://github.com/webiny/webiny-js/blob/aff0cc278dafb7ed515810176cad4a931c5aebb1/packages-utils/webiny-file-storage-s3/src/index.js#L305-L316 "Source code on GitHub")

Get file last modified time.

**Parameters**

-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** This is the file identifier under which the file is stored.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>** Unix timestamp.

##### getContentType

[packages-utils/webiny-file-storage-s3/src/index.js:324-332](https://github.com/webiny/webiny-js/blob/aff0cc278dafb7ed515810176cad4a931c5aebb1/packages-utils/webiny-file-storage-s3/src/index.js#L324-L332 "Source code on GitHub")

Get file content type.

**Parameters**

-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** This is the file identifier under which the file is stored.

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** File content type.
