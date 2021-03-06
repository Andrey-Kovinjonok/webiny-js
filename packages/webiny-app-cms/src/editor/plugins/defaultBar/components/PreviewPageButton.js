// @flow
import React from "react";
import { connect } from "webiny-app-cms/editor/redux";
import { getPage } from "webiny-app-cms/editor/selectors";
import { compose } from "recompose";
import { omit, isEqual } from "lodash";
import { withSnackbar } from "webiny-admin/components";
import { withRouter } from "webiny-app/components";
import { MenuItem } from "webiny-ui/Menu";
import { withCmsSettings } from "webiny-app-cms/admin/components";

const PreviewPageButton = ({ page, cmsSettings: { getPagePreviewUrl } }: Object) => {
    return (
        <MenuItem onClick={() => window.open(getPagePreviewUrl(page), "_blank")}>Preview</MenuItem>
    );
};

export default compose(
    connect(
        state => ({ page: omit(getPage(state), ["content"]) }),
        null,
        null,
        { areStatePropsEqual: isEqual }
    ),
    withSnackbar(),
    withRouter(),
    withCmsSettings()
)(PreviewPageButton);
