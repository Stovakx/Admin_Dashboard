import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import Header from "./header";
import React from "react";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(titleProps) => (
        <ThemedTitleV2 {...titleProps} text={"Admin Dashboard"} />
      )}
    >
      {children}
    </ThemedLayoutV2>
  );
}
