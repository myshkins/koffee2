{
  description = "jupiter coffee flake";

  inputs = {
    # nixpkgs.url = "nixpkgs/nixos-21.11";
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let

        pkgs = import nixpkgs {
          inherit system;
        };
        

    in {
      packages = {
        # frontend = pkgs.buildNpmPackage {
        #   pname = "ak0-frontend";
        #   version = "0.0.1";
        #   src = ./web;
        #   npmDepsHash = "sha256-InkMefNQA6e3Ul8PY8pkpXSCqaysGh10t7C683AS5LA=";
        # };
      };

      devShell = with pkgs;
        mkShell {
          buildInputs = with pkgs; [
            bash
            nodejs_22
          ];
          shellHook = ''
            if [ ! -d ./web/node_modules ]; then
              npm install
            fi
          '';
        };
      });
}

