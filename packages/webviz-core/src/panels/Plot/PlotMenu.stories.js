// @flow
//
//  Copyright (c) 2018-present, GM Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

import { storiesOf } from "@storybook/react";
import { noop } from "lodash";
import * as React from "react";
import { withScreenshot } from "storybook-chrome-screenshot";

import PlotMenu from "webviz-core/src/panels/Plot/PlotMenu";

function Wrapper({ children }) {
  return <div style={{ display: "inline-block" }}>{children}</div>;
}

storiesOf("<PlotMenu>", module)
  .addDecorator(withScreenshot())
  .add("With min and max y set", () => (
    <Wrapper>
      <PlotMenu minYValue="-5" maxYValue="5" isYAxisLocked={false} saveConfig={noop} />
    </Wrapper>
  ))
  .add("With min and max y not set", () => (
    <Wrapper>
      <PlotMenu minYValue="" maxYValue="" isYAxisLocked={false} saveConfig={noop} />
    </Wrapper>
  ))
  .add("With y axis locked", () => (
    <Wrapper>
      <PlotMenu minYValue="-5" maxYValue="5" isYAxisLocked saveConfig={noop} />
    </Wrapper>
  ));
