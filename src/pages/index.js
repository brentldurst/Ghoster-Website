import React from "react";
import theme from "theme";
import { Theme, Link, Image, LinkBox, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box
			min-width="100px"
			min-height="100px"
			height="150px"
			display="flex"
			align-items="flex-start"
			justify-content="center"
			background="--color-dark"
		>
			<LinkBox height="150px" width="300px" href="/index">
				<Image
					src="https://uploads.quarkly.io/667448e18d4a0c002030b611/images/GHOSTER%20logo%20.jpg?v=2024-06-20T17:13:43.706Z"
					display="flex"
					width="300px"
					height="150px"
					min-width="100%"
					min-height="100%"
					srcSet="https://smartuploads.quarkly.io/667448e18d4a0c002030b611/images/GHOSTER%20logo%20.jpg?v=2024-06-20T17%3A13%3A43.706Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/667448e18d4a0c002030b611/images/GHOSTER%20logo%20.jpg?v=2024-06-20T17%3A13%3A43.706Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/667448e18d4a0c002030b611/images/GHOSTER%20logo%20.jpg?v=2024-06-20T17%3A13%3A43.706Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/667448e18d4a0c002030b611/images/GHOSTER%20logo%20.jpg?v=2024-06-20T17%3A13%3A43.706Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/667448e18d4a0c002030b611/images/GHOSTER%20logo%20.jpg?v=2024-06-20T17%3A13%3A43.706Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/667448e18d4a0c002030b611/images/GHOSTER%20logo%20.jpg?v=2024-06-20T17%3A13%3A43.706Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/667448e18d4a0c002030b611/images/GHOSTER%20logo%20.jpg?v=2024-06-20T17%3A13%3A43.706Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</LinkBox>
		</Box>
		<Box
			min-width="100px"
			min-height="50px"
			height="50px"
			background="--color-dark"
			display="flex"
			justify-content="center"
			align-content="center"
			align-items="center"
		>
			<Link
				href="#"
				color="--light"
				display="flex"
				height="25px"
				width="100px"
				align-items="center"
				justify-content="center"
				background="--color-dark"
				font="20px --fontFamily-sansVerdana"
				text-decoration-line="initial"
			>
				About
			</Link>
			<Link
				href="#"
				color="--light"
				display="flex"
				height="25px"
				width="100px"
				align-items="center"
				justify-content="center"
				background="--color-dark"
				font="20px --fontFamily-sansVerdana"
				text-decoration-line="initial"
				align-content="center"
			>
				Music
			</Link>
			<Link
				href="#"
				color="--light"
				display="flex"
				height="25px"
				width="100px"
				align-items="center"
				justify-content="center"
				background="--color-dark"
				font="20px --fontFamily-sansVerdana"
				text-decoration-line="initial"
				align-content="center"
			>
				Video
			</Link>
			<Link
				href="#"
				color="--light"
				display="flex"
				height="25px"
				width="100px"
				align-items="center"
				justify-content="center"
				background="--color-dark"
				font="20px --fontFamily-sansVerdana"
				text-decoration-line="initial"
				align-content="center"
			>
				Shows
			</Link>
		</Box>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark" lg-border-color="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" flex-wrap="wrap" />
			<Box
				display="flex"
				width="100%"
				md-flex-wrap="wrap"
				height="500px"
				flex="0 0 auto"
				justify-content="center"
			>
				<Image
					src="https://uploads.quarkly.io/667448e18d4a0c002030b611/images/2023-08-18%2022.20.34.jpg?v=2024-06-20T18:09:59.647Z"
					display="flex"
					justify-content="center"
					align-items="center"
					srcSet="https://smartuploads.quarkly.io/667448e18d4a0c002030b611/images/2023-08-18%2022.20.34.jpg?v=2024-06-20T18%3A09%3A59.647Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/667448e18d4a0c002030b611/images/2023-08-18%2022.20.34.jpg?v=2024-06-20T18%3A09%3A59.647Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/667448e18d4a0c002030b611/images/2023-08-18%2022.20.34.jpg?v=2024-06-20T18%3A09%3A59.647Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/667448e18d4a0c002030b611/images/2023-08-18%2022.20.34.jpg?v=2024-06-20T18%3A09%3A59.647Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/667448e18d4a0c002030b611/images/2023-08-18%2022.20.34.jpg?v=2024-06-20T18%3A09%3A59.647Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/667448e18d4a0c002030b611/images/2023-08-18%2022.20.34.jpg?v=2024-06-20T18%3A09%3A59.647Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/667448e18d4a0c002030b611/images/2023-08-18%2022.20.34.jpg?v=2024-06-20T18%3A09%3A59.647Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"667448e18d4a0c002030b60f"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});