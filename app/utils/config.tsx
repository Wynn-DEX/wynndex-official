import { useMemo, useEffect, useRef } from "react";
import { useTranslation } from "@orderly.network/i18n";
import { TradingPageProps } from "@orderly.network/trading";
import {
  BottomNavProps,
  FooterProps,
  MainNavWidgetProps,
  MainNavItem as MainNavItemType,
} from "@orderly.network/ui-scaffold";
import { AppLogos } from "@orderly.network/react-app";
import { OrderlyActiveIcon, OrderlyIcon } from "../components/icons/orderly";
import { withBasePath } from "./base-path";
import {
  PortfolioActiveIcon,
  PortfolioInactiveIcon,
  TradingActiveIcon,
  TradingInactiveIcon,
  LeaderboardActiveIcon,
  LeaderboardInactiveIcon,
  MarketsActiveIcon,
  MarketsInactiveIcon,
  useScreen,
  Flex,
  cn,
} from "@orderly.network/ui";
import {
  getRuntimeConfig,
  getRuntimeConfigBoolean,
  getRuntimeConfigNumber,
} from "./runtime-config";
