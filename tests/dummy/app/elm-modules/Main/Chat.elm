port module Main.Chat exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Hello.Label


main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



--
-- Model.
--


type alias Model =
    { server : String
    , input : String
    , messages : List String
    }


init : String -> ( Model, Cmd Msg )
init server =
    ( Model server "" [], Cmd.none )



--
-- Update.
--


type Msg
    = Input String    
    | SendMessage
    | RecieveMessage String


update : Msg -> Model -> ( Model, Cmd msg )
update msg ({ server, input, messages } as model) =
    case msg of
        Input newInput ->
            ( { model | input = newInput }, Cmd.none )

        SendMessage ->
            ( { model | input = "" }, elmMessage model.input )

        RecieveMessage newMessage ->
            ( { model | messages = newMessage :: messages }, Cmd.none )


--
-- Ports.
--


port elmMessage : String -> Cmd msg


--
-- Subscriptions.
--


port emberMessage : (String -> msg) -> Sub msg


subscriptions : Model -> Sub Msg
subscriptions _ =
    emberMessage RecieveMessage


--
-- View.
--


view : Model -> Html Msg
view model =
    div [ class "chat-container" ]
        [ input [ class "chat-message-input", onInput Input, value model.input ] []
        , button [ onClick SendMessage ] [ text Hello.Label.text ]
        , div [ class "chat-messages" ] (List.map viewMessage (List.reverse model.messages))
        ]


viewMessage : String -> Html msg
viewMessage msg =
    div [] [ text msg ]
